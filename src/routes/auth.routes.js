import express from "express";
import AuthController from "../controllers/authController.js";

const authRouter = express.Router();

authRouter.get("/", AuthController.getAllprofile);
authRouter.get("/:id", AuthController.getProfileById);
authRouter.post("/register", AuthController.register);
authRouter.post("/login", AuthController.login);

export default authRouter;
