const express = require("express");
const app = express();//instance of express function
const http = require("http");//needed to build a server with socket.io
const cors = require("cors");//resolve connection issues
const { Server /*a class from the socket io library*/ } = require("socket.io");
app.use(cors());

const server = http.createServer(app);//used to generate a server

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000"/*source port */,
    methods: ["GET", "POST"]/*methods allowed */,
  },
});//server instantiation

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });//listening to an event i.e conection in this case

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });//listening to an event i.e sending message in this case

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});//listening to an event i.e disconection in this case

server.listen(3001/*port to listen*/, () => {
  console.log("SERVER RUNNING");
});//call back function
