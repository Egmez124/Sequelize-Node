const {Clientes, Pagos} = require("../models");

const obtenerClientes = async (req, res)=>{
    try {
        const results = await Clientes.findAll({include: [Pagos]});
         res.json(results); 
    } catch (error) {
        console.log(error);
    }
}

const idCliente = async (req, res)=>{
    try {
        const results = await Clientes.findOne({where: {id: req.params.id}});
         res.json(results); 
    } catch (error) {
        console.log(error);
    }
}

const registrarCliente = async (req, res)=>{
    const datos = req.body;
    try {
        const results = await Clientes.create(datos);    
        res.json({message: results});
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    obtenerClientes,
    idCliente,
    registrarCliente
}