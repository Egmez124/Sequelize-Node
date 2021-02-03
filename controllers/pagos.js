const {Pagos, Clientes, Membrecias} = require("../models");

const obtenerPagos = async (req, res)=>{
    try {
        const results = await Pagos.findAll({include: [Clientes, Membrecias]});
         res.json(results); 
    } catch (error) {
        console.log(error);
    }
}

const registroPago = async (req, res)=>{
    const datos = req.body;
    try {
        const results = await Pagos.create(datos);    
        res.json({message: results});
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    obtenerPagos,
    registroPago
}