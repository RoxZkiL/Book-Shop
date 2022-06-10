const { Router } = require("express");

const books = require("../regalos.json");

const bookName = require("../libros.json");

const router = Router();

router.get("/", (req, res) => {
  let output = Object.values(
    books.reduce((obj, { book }) => {
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
  let filteredBooks = bookName.filter(
    (e) => e.id === output.map((x) => x.bookId)
  );
  console.log(filteredBooks);
  res.send(output);
});

module.exports = router;
