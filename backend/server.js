import express from "express";
import userRouter from "./routes/user-routes.js";
import authRouter from "./routes/auth-routes.js";
import groupRouter from "./routes/group-routes.js";
import sequelize from "./database/database.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
const PORT = 4000;

app.use(cors({
    origin: 'http://localhost:3000', 
    credentials: true,
}));
app.use(cookieParser());
app.use(express.json());

(async () => {
    try {
        await sequelize.authenticate();
        console.log('connection is authenticated')

        await sequelize.sync();
        console.log("Connection with database is sync");

    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

app.use('/user', userRouter);
app.use('/auth', authRouter);
app.use('/group', groupRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})