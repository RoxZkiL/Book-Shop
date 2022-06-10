const { Router } = require("express");
const top5 = require("./Top5");
const top10 = require("./Top10");
const bookdetail = require("./DetailBook");
const userDetail = require("./DetailUser");

const router = Router();

router.use("/topCinco", top5);
router.use("/topDieZ", top10);
router.use("/detail", detail);
router.use("/search", userDetail);

module.exports = router;
