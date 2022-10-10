const sequelize = require("../connect.js");
const Sequelize = require("sequelize");

const PromotionBundle = sequelize.define('promotionBundle', {
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

PromotionBundle.sync({alter:true});

export default PromotionBundle;