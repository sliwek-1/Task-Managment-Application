import express from "express";

const groupRouter = express.Router();

groupRouter.post('/create', login);

groupRouter.post("/update", register);

groupRouter.post("/delete/:id", register);

groupRouter.post("/getAll", register);

groupRouter.post("/getOne/:id", register);

export default groupRouter;