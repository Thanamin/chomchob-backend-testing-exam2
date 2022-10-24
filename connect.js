const {Sequelize} = require("sequelize");

const db = 'db_sequelize_codeItem'; // <<<< ใส่ชื่อ Database
const user = 'postgres';   // <<<< ใส่ชื่อ user
const pass = 'ใส่ password'; // <<<< ใส่ password ตรงนี้
const host = 'localhost'; // <<<< ใส่ ้host ตรงนี้
const port = '5432'; // <<<< ใส่ port ตรงนี้
const db_type = 'postgres'; // ใส่ dialect ตรงนี้

const sequelize = new Sequelize(db,
   user, pass, {
    host,
    port,
    dialect: db_type,
    define: {
      freezeTableName: true,
      timestamps: true,
   },
}) 


module.exports = sequelize;