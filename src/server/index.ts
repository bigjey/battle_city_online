import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import cors from "cors";

import { GameRunner } from "../shared/GameRunner";
import { Command } from "../constants";
import { ICommandData } from "../types";
import path from "path";

const app = express();

app.use(cors());

app.use(express.static(path.resolve(__dirname, "../client/")));

app.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/index.html"));
});

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

const games: Record<string, GameRunner> = {};

io.on("connection", (socket: Socket) => {
  socket.on("start", (callback) => {
    const game = new GameRunner(1, io);
    game.addPlayer(socket.id);
    socket.join(game.id);
    games[game.id] = game;

    callback(game.id);
  });

  socket.on("join", (callback) => {
    const game = Object.values(games)[0];
    if (game) {
      game.addPlayer(socket.id);
      socket.join(game.id);

      callback(game.id);
    }
  });

  socket.on("command", (data: ICommandData) => {
    const game = gameBySocketId(socket.id);
    if (!game) {
      return;
    }
    game.processCommand(data, socket.id);
  });

  socket.on("disconnect", (reason) => {
    const game = gameBySocketId(socket.id);
    if (!game) {
      return;
    }
    game.removePlayer(socket.id);
  });
});

function gameBySocketId(id: string): GameRunner | null {
  const game = Object.values(games).find((g) => g.players[id]);

  if (game) {
    return game;
  }

  return null;
}

const port = process.env.PORT || 3000;

httpServer.listen(port, () => {
  console.log(`game server is running at http://localhost:${port}`);
});
