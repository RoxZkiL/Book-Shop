const { Router } = require("express");
const topCinco = require("./Top5");
const topDieZ = require("./Top10");
const detail = require("./Details");
const userDetail = require("./DetailUser")

const router = Router();

router.use("/topCinco", topCinco);
router.use("/topDieZ", topDieZ);
router.use("/detail", detail);
router.use("/search", userDetail);

module.exports = router;
