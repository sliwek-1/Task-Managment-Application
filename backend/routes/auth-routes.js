import express from "express";
import auth from "../controllers/auth-controller.js";

const authRouter = express.Router();

authRouter.get('/authLogin', auth);

export default authRouter;