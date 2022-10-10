const Sequelize = require("sequelize");

const db = 'itemDb';
const user = 'mariadb';
const pass = '1234';
const host = '127.0.0.1';
const port = '3306'

const sequelize = new Sequelize(db,
   user, pass, {
    host,
    port,
    dialect: 'mariadb',
    define: {
      freezeTableName: true,
      timestamps: true,
   },
})

export default sequelize