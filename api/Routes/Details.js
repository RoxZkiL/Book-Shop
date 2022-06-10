const { Router } = require("express");
const bd_books = require("../libros.json");
const router = Router();

router.get("/:id", (req, res) => {
  const { id } = req.params;
  console.log(bd_books);
  let detail = bd_books.find((el) => el.id === Number(id));
  if (detail) {
    res.status(200).send(detail);
  } else {
    res.status(400).send("no existe el libro buscado");
  }
});

module.exports = router;
