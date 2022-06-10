const router = require("express").Router();
const bd_users = require("../usuarios.json");

router.get("/:id",(req,res) =>{
    const idUser = req.params.id
    const user = bd_users.find(e => e.id === Number(idUser))
    if(user){
        res.send(200, user)
    }else{
        res.send({msg: "Error usuario con id: " + idUser + " no encontrado"})
    }
})  

module.exports = router