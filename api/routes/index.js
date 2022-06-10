import express from "express";
import { LIBROS, USUARIOS, REGALOS } from "../Json/bd.js";


const router = express.Router();

router.use("/topRegalos", (req, res) => {
    res.send(LIBROS)
});

export default router;
