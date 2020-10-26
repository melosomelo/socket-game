import express from "express";
import http from "http";
import socketio from "socket.io";

const app = express();
const server = http.createServer(app);

const io = socketio(server, {});

io.on("connection", (socket) => {
  console.log("eai");
});

app.use((req, res) => {
  return res.status(200).send(`<h1> Hello world from node with TS! </h1>`);
});

server.listen(3000);
