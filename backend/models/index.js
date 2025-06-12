import User from "./user.js";
import Group from "./group.js";

User.hasMany(Group);

Group.belongsTo(User, {
    foreignKey: 'owner'
})


export {User, Group}