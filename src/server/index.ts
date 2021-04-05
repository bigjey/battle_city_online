import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import cors from "cors";

const app = express();

app.use(cors());

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket: Socket) => {
  console.log(socket.id);

  socket.on("test", () => {
    socket.emit("msg", "ayaya");
  });
});

httpServer.listen(3000, () => {
  console.log("adsad");
});

// import express from "exress";
// import http from "http";
// import socketIO from "socket.io";

// const app = express();
// const httpServer = http.createServer(app);
// const options = {
//   /* ... */
// };
// const io = socketIO(httpServer, options);

// io.on("connection", (socket) => {
//   console.log(socket.id);

//   socket.on("test", () => {
//     socket.emit("msg", "ayaya");
//   });
// });

// httpServer.listen(3000);
