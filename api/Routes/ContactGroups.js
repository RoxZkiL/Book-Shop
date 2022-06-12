const router = require("express").Router();
const { idGroups } = require("./utils/utils");
const bd_regalos = require("../Database/regalos.json");
router.get("/", (req, res) => {
  res.send(idGroups(bd_regalos));
});

module.exports = router