import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";
import { v4 as uuid } from "uuid";


const Membership_Group = sequelize.define('Membership_Group', {
    uniqueID: {
        type: DataTypes.STRING,
        defaultValue: uuid
    },
    userID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    groupID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

export default Membership_Group;