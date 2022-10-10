const sequelize = require("../connect.js");
const Sequelize = require("sequelize");

const Bundle = sequelize.define('bundle', {
   id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
   },
   description: {
      type: Sequelize.STRING
   },
   price: {
      type: Sequelize.INTEGER,
   }
})

Bundle.sync({alter:true});

export default Bundle