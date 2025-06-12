import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";
import { v4 as uuid } from "uuid";


const Group = sequelize.define('Group', {
    uniqueID: {
        type: DataTypes.STRING,
        defaultValue: uuid
    },
    owner: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    title_img_url: {
        type: DataTypes.STRING,
        allowNull: false
    },
})

export default Group;