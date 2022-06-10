const { Router } = require("express");
const topBooks = require("./Top5");

const router = Router();

router.use("/topBooks", topBooks);

module.exports = router;
