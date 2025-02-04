import express from "express";
import dotenv from "dotenv";
import path from "path";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

// const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();
// console.log(__dirname);

app.use(cookieParser());
app.use(express.json());

//middleware for auth route
app.use("/api/auth", authRoutes);

//middle for message routes
app.use("/api/messages", messageRoutes);

//middle for user routes
app.use("/api/users", userRoutes);

// middleware to serve static files
app.use(express.static(path.join(__dirname, "/frontend/dist")));

//  any routes excepts above routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`server is running on ${PORT}`);
});
