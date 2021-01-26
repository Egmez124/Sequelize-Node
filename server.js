const express = require("express");
const logger = require("morgan");
require("dotenv").config();

const PORT = process.env.PORT;

const app = express();

app.use(logger("dev"));

app.get('/', (request, response)=>{
    response.send("hola mundo");
});

app.listen(PORT, () => {
    console.log("Corriendo puerto", PORT)
});