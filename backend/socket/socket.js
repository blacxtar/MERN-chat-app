import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
  },
});

export const getRecieverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
};
export const getUserId = (socketId) => {
  return Object.keys(userSocketMap).find(
    (key) => userSocketMap[key] === socketId || null
  );
};

const userSocketMap = {};
io.on("connection", (socket) => {
  //   console.log("A User connected with id :", socket.id);

  const userId = socket.handshake.query.userId;
  if (userId != "undefined") userSocketMap[userId] = socket.id;

  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("typing", ({ typing, receiver, sender }) => {
    // console.log("typing", "sender", sender, "receiver", receiver);

    const recieverSocketId = getRecieverSocketId(receiver);
    if (recieverSocketId) {
      console.log("sending typing", "sender", sender, "receiver", receiver);

      socket.to(recieverSocketId).emit("typing", { typing, sender });
    }
  });

  socket.on("stopTyping", ({ typing, receiver, sender }) => {
    console.log("Stop Typing");
    const recieverSocketId = getRecieverSocketId(receiver);
    if (recieverSocketId) {
      socket.to(recieverSocketId).emit("stopTyping", {
        typing,
        sender,
      });
    }
  });

  socket.on("disconnect", () => {
    // console.log("user disconnected :", socket.id);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});
export { app, io, server };
