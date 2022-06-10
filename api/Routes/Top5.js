const { Router } = require("express");

const bd_gifts = require("../regalos.json");

const bd_books = require("../libros.json");

const router = Router();

router.get("/", (req, res) => {
  let output = Object.values(
    bd_gifts.reduce((obj, { book }) => {
      if (obj[book] === undefined) {
        obj[book] = { bookId: book, occurrence: 1 };
      } else {
        obj[book].occurrence++;
      }
      return obj;
    }, {})
  )
    .sort((a, b) => {
      if (a.occurrence > b.occurrence) {
        return -1;
      }
      if (b.occurrence < a.occurrence) {
        return 1;
      }
      return 0;
    })
    .slice(0, 5);

  const complete = output.map((top) => {
    for (let i = 0; i < bd_books.length; i++) {
      if (bd_books[i].id === top.bookId) {
        return { ...top, title: bd_books[i].title, isn: bd_books[i].iesn,Editorial: bd_books[i].Editorial, author: bd_books[i].author,publish_date: bd_books[i]["publish date"] };
      }
    }
  });

  res.send(complete);
});

module.exports = router;
