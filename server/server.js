const express = require("express");
const path = require("path");
const socketIO = require("socket.io");

const http = require("http"); // necesario para trabajar con socket

const app = express();
let server = http.createServer(app); // trabajarlo con express

const publicPath = path.resolve(__dirname, "../public");
const port = process.env.PORT || 3000;

// habilitar la carpeta publica
app.use(express.static(publicPath));

// comunicacion del backend
module.exports.io = socketIO(server);
require('./sockets/socket');

server.listen(port, err => {
    if (err) throw new Error(err);
    console.log(`Servidor corriendo en puerto ${port}`);
});