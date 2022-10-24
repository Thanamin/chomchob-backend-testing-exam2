const sequelize = require("../connect.js");
const Sequelize = require("sequelize");

const CodeItem = sequelize.define('codeItem', {
   id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
   },
})

CodeItem.sync({alter:true});


module.exports = CodeItem;