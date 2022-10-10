const sequelize = require("../connect.js");
const Sequelize = require("sequelize");

const Item = sequelize.define('item', {
   id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
   },
   itemName: {
      type: Sequelize.STRING,
      allowNull: false
   },
   price: {
      type: Sequelize.INTEGER,
      allowNull: false
   }
   ,
   startDate: {
      type: Sequelize.DATE,
      allowNull: false
   },
   endDate: {
      type: Sequelize.DATE,
      allowNull: false
   }
})

Item.sync({alter:true});

export default Item