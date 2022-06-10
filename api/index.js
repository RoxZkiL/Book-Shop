const { Router } = require("express");
const hola = require("./Routes/hola");

const router = Router();

router.use("/hola", hola);

module.exports = router;
