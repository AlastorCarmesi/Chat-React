//Modulos necesarios para el chat
const express = require("express");
const app = express();
const http = require('http');
const server = http.createServer(app);
const {Server} = require("socket.io");
const io = new Server(server);
import { Server as SocketServer } from "socket.io";



app.listen(3000)
console.log('Server on Port', 3000)