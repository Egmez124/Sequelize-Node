const express = require("express");

const {obtenerClientes, idCliente, registrarCliente} = require("../controllers/clientes");

const router = express.Router();

router.get("/clientes", obtenerClientes);
router.get("/clientes/:id", idCliente);
router.post("/registro/cliente", registrarCliente);

module.exports= router;