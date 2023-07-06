//Modulos necesarios para el chat
const express = require("express");
const http = require('http');
import { Server as SocketServer } from "socket.io";

const app = express();
const io = new Server(server);
const server = http.createServer(app);

io.on('connection', socket => {
    console.log('usuario conectado...')
})

server.listen(4000)
console.log('Server on Port', 4000)