import { Group, User } from "../models/index.js";

async function create(req, res) {
    try {
        const { name, description, access} = req.body;

        if(name == "" || description == "" || access == "") {
            return res.status(500).send("All inputs are required");
        }

        const user = await User.findOne({where: {
            email: req.email
        }})

        console.log(user)

        const group = await Group.create({ name: name, owner: user.id, description: description, access: access });

        if(group) {
            res.status(200).send("Group was addedd succesfully");
        } else {
            res.status(500).send("Something went wrong");
        }

    } catch (error) {
        console.log(error)
        return res.status(500).send("Something went wrong")
    }
}

async function update(req, res) {
    try {
        
    } catch (error) {
        return res.status(500).send("Something went wrong")
    }
}

async function deleteGroup(req, res) {
    try {
        
    } catch (error) {
        return res.status(500).send("Something went wrong")
    }
}
 
async function getAll(req, res) {
    try {
        
    } catch (error) {
        return res.status(500).send("Something went wrong")
    }
}

async function getOne(req, res) {
    try {
        
    } catch (error) {
        return res.status(500).send("Something went wrong")
    }
}

export {create, update, deleteGroup, getAll, getOne}