var express = require('express');
var router = express.Router();

//ผูก model เข้ากับโปรเจคของเรา
const Item = require('../models/item')
const Bundle = require('../models/bundle')
const CodeItem = require('../models/codeItem')
const PromotionBundle = require('../models/promotionBundle')
const PromotionItem = require('../models/promotionItem')
const User = require('../models/user')



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

////////////////


PromotionItem.hasOne(Item)
Item.belongsTo(PromotionItem)

Bundle.hasMany(Item)
Item.belongsTo(Bundle)

PromotionBundle.hasOne(Bundle)
Bundle.belongsTo(PromotionBundle)

CodeItem.hasMany(Bundle, { as: 'bundle' })
CodeItem.belongsTo(User, { as: 'user' })


module.exports = router;
