const router = require("express").Router();
const bd_users = require("../Database/usuarios.json");
const bd_regalos = require("../Database/regalos.json");
const { idGroups } = require("./utils/utils");

router.get("/:id", (req, res) => {
  const idUser = req.params.id;
  const user = bd_users.find((e) => e.id === Number(idUser));

  const allGroupsContact = idGroups(bd_regalos);
  if (user) {
    for (let i = 0; i < allGroupsContact.length; i++) {
      if (allGroupsContact[i].includes(Number(idUser))) {
        user.group = allGroupsContact[i].slice(0, 5);
        if (allGroupsContact[i].length > 5) {
          user.more = true;
          break;
        }
      }else {
        user.more = false;
      }
    }
  }

  if (user) {
    res.status(200).send(user);
  } else {
    res.send({ msg: "Error usuario con id: " + idUser + " no encontrado" });
  }
});

module.exports = router;

// const { Router } = require("express");
// const bd_users = require("../usuarios.json");
// const router = Router();

// router.get("/:id", (req, res) => {
//   const { id } = req.params;
//   const user = bd_users.find((e) => e.id === Number(id));
//   if (user) {
//     res.status(200).send(user);
//   } else {
//     res.status(400).send("Usuario no encontrado");
//   }
// });

// router.get("/:email", (req, res) => {
//   const { email } = req.params;
//   const user = bd_users.find((e) => e.email === email);
//   if (user) {
//     res.status(200).send(user);
//   } else {
//     res.status(400).send("Usuario no encontrado");
//   }
// });

// module.exports = router;
