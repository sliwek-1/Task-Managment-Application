import express from "express";
import login from "../controllers/login-controller.js";
import register from "../controllers/register-controller.js";

const userRouter = express.Router();

userRouter.post('/login', login);

userRouter.post("/register", register);

export default userRouter;