const sequelize = require("../connect.js");
const Sequelize = require("sequelize");

const PromotionItem = sequelize.define('promotionItem', {
   id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
   },
   startDate: {
      type: Sequelize.DATE,
      allowNull: false
   },
   endDate: {
      type: Sequelize.DATE,
      allowNull: false
   },
   discountRate: {
      type: Sequelize.FLOAT,
      allowNull: false
   }
})

PromotionItem.sync({alter:true});


module.exports = PromotionItem;