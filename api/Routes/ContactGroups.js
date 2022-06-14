const router = require("express").Router();
const { idGroups, alphabeticalId } = require("./utils/utils");
const bd_users = require("../Database/usuarios.json");
const bd_regalos = require("../Database/regalos.json");


router.get("/", (req, res) => {
 // [[1,2],[50,60],[10,20]]
  const contactGroups =  idGroups(bd_regalos)
  const orderAtoZ = alphabeticalId(contactGroups, bd_users)
  res.send(orderAtoZ);
});

module.exports = router