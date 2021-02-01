const express = require("express");
// const logger = require("morgan");
require("dotenv").config();

const PORT = process.env.PORT;
const app = express();
const {Clientes, Pagos, Membrecias} = require("./models");
app.use(express.json()); 

app.get("/clientes", async (req, res)=>{
    try {
        const results = await Clientes.findAll();
         res.json(results); 
    } catch (error) {
        console.log(error);
    }
});

app.get("/pagos", async (req, res)=>{
    try {
        const results = await Pagos.findAll();
         res.json(results); 
    } catch (error) {
        console.log(error);
    }
});

app.get("/membrecias", async (req, res)=>{
    try {
        const results = await Membrecias.findAll();
         res.json(results); 
    } catch (error) {
        console.log(error);
    }
});

app.get("/cliente/:id", async (req, res)=>{
    try {
        const results = await Clientes.findOne({where: {id: req.params.id}});
         res.json(results); 
    } catch (error) {
        console.log(error);
    }
});

app.get("/membrecia/:id", async (req, res)=>{
    try {
        const results = await Membrecias.findOne({where: {id: req.params.id}});
         res.json(results); 
    } catch (error) {
        console.log(error);
    }
});

app.post("/registro/cliente", async(req, res)=>{
    const datos = req.body;
    console.log(datos);
    try {
        const results = await Clientes.create(datos);    
        res.json({message: results});
    } catch (error) {
        console.log(error);
    }
});

app.post("/registro/pago", async(req, res)=>{
    const datos = req.body;
    console.log(datos);
    try {
        const results = await Pagos.create(datos);    
        res.json({message: results});
    } catch (error) {
        console.log(error);
    }
});

app.post("/registro/membrecia", async(req, res)=>{
    const datos = req.body;
    console.log(datos);
    try {
        const results = await Membrecias.create(datos);    
        res.json({message: results});
    } catch (error) {
        console.log(error);
    }
});

app.listen(PORT, () => {
    console.log("Corriendo puerto", PORT)
});