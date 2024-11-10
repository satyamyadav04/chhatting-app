// const http = require("http");
// const express = require("express");
// const app = express();
// // create a server
// const server = http.createServer(app);
// app.use(express.static("/public"));
// // create a route
// aap.get('/',(req,res) =>  {
//       return res.sendFile("./public/index.html");
// });
// server.listen(9000, () => console.log(`server started at port 9000`))
const http = require("http");
const express = require("express");
const path = require("path");
//  import socket server 
const { Server } = require("socket.io");

const app = express();
// create a server
const server = http.createServer(app);
// create a io
const io = new Server(server);

// Socket.io
io.on("connection", (socket) => {
  socket.on("user-message", (message) => {
    io.emit("message", message);
  });
});

app.use(express.static(path.resolve("./public")));
// create a route
app.get("/", (req, res) => {
  return res.sendFile("/public/index.html");
});

server.listen(9000, () => console.log(`Server Started at PORT:9000`));
