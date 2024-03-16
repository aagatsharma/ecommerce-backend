import { Router } from "express";
import { login, signup } from "../controllers/authController";
import { errorHandler } from "../error-handler";

const authRoutes = Router();

authRoutes.post("/login", errorHandler(login));
authRoutes.post("/signup", errorHandler(signup));

export default authRoutes;
