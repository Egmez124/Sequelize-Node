const express = require("express");
// const logger = require("morgan");
require("dotenv").config();

const clientesRouter = require("./routes/clientes");
const pagosRouter = require("./routes/Pagos");
const membreciasRouter = require("./routes/membrecias");

const PORT = process.env.PORT;
const app = express();


app.use(clientesRouter);
app.use(pagosRouter);
app.use(membreciasRouter);

app.listen(PORT, () => {
    console.log("Corriendo puerto", PORT)
});