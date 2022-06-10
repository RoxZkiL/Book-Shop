const { Router } = require("express");
const top5 = require("./Top5");
const top10 = require("./Top10");
const detail = require("./Details");

const router = Router();

router.use("/top5", top5);
router.use("/top10", top10);
router.use("/detail", detail);

module.exports = router;
