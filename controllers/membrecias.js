const {Membrecias} = require("../models/");

const obtenerMembrecias = async (req, res)=>{
    try {
        const results = await Membrecias.findAll();
         res.json(results); 
    } catch (error) {
        console.log(error);
    }
}

const idMembrecia = async (req, res)=>{
    try {
        const results = await Membrecias.findOne({where: {id: req.params.id}});
         res.json(results); 
    } catch (error) {
        console.log(error);
    }
}

const registrarMembrecia = async (req, res)=>{
    const datos = req.body;
    try {
        const results = await Membrecias.create(datos);    
        res.json({message: results});
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    obtenerMembrecias,
    idMembrecia,
    registrarMembrecia
}