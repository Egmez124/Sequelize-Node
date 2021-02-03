const express=require("express");
const router=express.Router();

const {obtenerPagos, registroPago} = require("../controllers/pagos")

router.get("/pagos", obtenerPagos);
router.post("/registro/pago", registroPago);

module.exports = router;