const { Router } = require("express");
const bd_gifts = require("../regalos.json");
const bd_books = require("../libros.json");
const router = Router();
const { topOcurrenceBooks } = require("./utils/utils");

router.get("/", (req, res) => {

  const output = topOcurrenceBooks(bd_gifts, true);

  const filtro = bd_books
    .filter((element) => {
      const match = output.find((e) => e.bookId === element.id);
      if (!match) return element;
    })
    .slice(0, 10);

    res.send(filtro);
});

router.get("/:order", (req, res) => {
  const order = req.params.order;
  console.log(order);
  const output = topOcurrenceBooks(bd_gifts, true);

  const filtro = bd_books
    .filter((element) => {
      const match = output.find((e) => e.bookId === element.id);
      if (!match) return element;
    })
    .slice(0, 10);

  if (order === "alphabetical") {
    filtro.sort((name1, name2) => {
      const title1 = name1.title.toLowerCase();
      const title2 = name2.title.toLowerCase();

      if (title1 < title2) return -1;
      if (title1 > title2) return 1;
      return 0;
    });
    res.send(filtro);
  } else if (order === "publishDate") {
    filtro.sort((date1, date2) => {
      const firstFecha = Number(date1["publish date"].slice(0, 4));
      const secondFecha = Number(date2["publish date"].slice(0, 4));

      if (firstFecha < secondFecha) return 1;
      if (firstFecha > secondFecha) return -1;
      return 0;
    });
    res.send(filtro);
  }
});

module.exports = router;