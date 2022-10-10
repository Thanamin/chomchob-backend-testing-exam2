const sequelize = require("../connect.js");
const Sequelize = require("sequelize");

const User = sequelize.define('user', {
   id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
   },
   name: {
      type: Sequelize.STRING
   }
})

User.sync({alter:true});

export default User
