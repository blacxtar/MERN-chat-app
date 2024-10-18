import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

// get only router for here as we need only router
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router;
