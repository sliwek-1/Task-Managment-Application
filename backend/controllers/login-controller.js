import { User } from "../models/index.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

export default async function login(req, res) {
    try {
        const {email, password} = req.body;
    
        if (email == "" || password == "") {
            return res.status(400).send("Email or Password is Missing");
        }

        const user = await User.findOne({where: { email: email} });  

        if (!user) {
            return res.status(404).send("Nie ma takiego użytkownika")
        }

        const match = await bcrypt.compare(password, user.password);

        if(!match) {
            return res.status(400).send("Niepoprawny adres email lub hasło");
        } 

        const accessToken = jwt.sign({ email: email }, process.env.SECRET_KEY, { expiresIn: '60m' });


        res.cookie('accessToken', accessToken,{
            httpOnly: true,
            secure: false, 
            sameSite: 'Strict', 
            maxAge: 60 * 60 * 1000 
        })

        return res.status(200).send({
            info: "Logged in successfully",
            name: user.name,
            surname: user.surname,
            login: user.login,
            email: user.email,
            uniqueId: user.uniqueID
        });
        
    } catch (error) {
        console.log(error)
        return res.status(400).send("Something went wrong")
    }
}