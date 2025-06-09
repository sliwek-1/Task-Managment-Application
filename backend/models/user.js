import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";
import { v4 as uuid } from "uuid";

const User = sequelize.define('User', {
    uniqueID: {
        type: DataTypes.STRING,
        defaultValue: uuid
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    login: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

export default User;