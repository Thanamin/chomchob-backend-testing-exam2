const sequelize = require("../connect.js");
const Sequelize = require("sequelize");

const Bundle = sequelize.define('bundle', {
   id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
   },
   price: {
      type: Sequelize.INTEGER,
   }
})

Bundle.sync({alter:true});

module.exports = Bundle;