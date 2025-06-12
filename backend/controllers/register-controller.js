import bcrypt from "bcrypt";
import { User } from "../models/index.js";

export default async function register(req, res) {
    try {
        const {name, surname, login, email, password, passwordConfirmation} = req.body;

        if (name == "" || surname == "" || login == "" || email == "" || password == "" || passwordConfirmation == "") {
            return res.status(400).send("All fields are required");
        }

        if (password !== passwordConfirmation) {
            return res.status(400).send("Passwords must be the same");
        }

        const user = await User.findOne({where: { email: email }});
        if (user) {
            return res.status(400).send("User with this email already exist");
        }

        const salt = await bcrypt.genSalt();

        const passwordHashed = await bcrypt.hash(password, salt);

        const createdUser = await User.create({name: name, surname: surname, login: login, email: email, password: passwordHashed});

        if(createdUser) {
            return res.status(200).send("Your account was create successfully");
        } else {
            return res.status(400).send("Something went wrong :( please try again");
        }

    } catch (error) {
        console.log(error)
        return res.status(400).send("Someting went wrong", error);
    }
}
