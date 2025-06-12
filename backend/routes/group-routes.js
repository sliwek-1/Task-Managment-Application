import express from "express";
import create from "../controllers/group-controller.js";
import update from "../controllers/group-controller.js";
import deleteGroup from "../controllers/group-controller.js";
import getAll from "../controllers/group-controller.js";
import getOne from "../controllers/group-controller.js";
import auth from "../middleware/auth-middleware.js";

const groupRouter = express.Router();

groupRouter.post('/create', auth, create);

groupRouter.post("/update", auth, update);

groupRouter.post("/delete/:id", auth, deleteGroup);

groupRouter.post("/getAll", auth, getAll);

groupRouter.post("/getOne/:id", auth, getOne);

export default groupRouter;