const express=require("express");

const {obtenerMembrecias, idMembrecia, registrarMembrecia} = require("../controllers/membrecias");
const { route } = require("./clientes");

const router=express.Router();

router.get("/membrecias", obtenerMembrecias);
router.get("/membrecia/:id", idMembrecia);
router.post("/registro/membrecia", registrarMembrecia);

module.exports = router;