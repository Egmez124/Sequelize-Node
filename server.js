const express = require("express");
const logger = require("morgan");
require("dotenv").config();

const PORT = process.env.PORT;
const app = express();
const {Clientes, Pago, Membrecia} = require("./models");
const clientes = require("./models/clientes");

app.use(logger("dev"));

app.post('/registro/cliente', async(req, res)=>{
    const datos = req.body;
    try {
        const reults = await Clientes.create(datos);    
        res.json({message: reults});
    } catch (error) {
        console.log(error);
    }
});

app.post('/registro/pago', async(req, res)=>{
    const datos = req.body;
    await Pago.create(datos);
});

app.post('/registro/membrecia', async(req, res)=>{
    const datos = req.body;
    await Membrecia.create(datos);
});

app.get('/clientes', async(req, res)=>{
    try {
        const results = await Clientes.findAll({
            includes: [Clientes] 
         });
         res.json(results);
    } catch (error) {
        console.log(error);
    }
});

app.get('/pagos', async(req, res)=>{
    try {
        const results = await Pago.findAll({
            includes: [Pago] 
         });
         res.json(results);
    } catch (error) {
        console.log(error);
    }
});

app.get('/membrecias', async(req, res)=>{
    try {
        const results = await Membrecia.findAll({
            includes: [Membrecia]
         });
         res.json(results);
    } catch (error) {
        console.log(error);
    }
});

app.get('/clientes/:id', async(req, res)=>{
    try {
        const results = await Clientes.findOne({
            where: {id: req.params.id}
        });
            res.json(results);
    } catch (error) {
        console.log(error);
    }
});

app.get('/membrecias/:id', async(req, res)=>{
    try {
        const results = await Membrecia.findOne({
            where: {id: req.params.id}
        });
            res.json(results);
    } catch (error) {
        console.log(error);
    }
});

app.listen(PORT, () => {
    console.log("Corriendo puerto", PORT)
});