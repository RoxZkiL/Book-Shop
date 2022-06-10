const { Router } = require("express");
const topCinco = require("./Top5");
const topDieZ = require("./Top10");

const router = Router();

router.use("/topCinco", topCinco);
router.use("/topDieZ", topDieZ);

module.exports = router;
