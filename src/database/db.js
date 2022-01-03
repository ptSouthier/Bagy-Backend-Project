const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './src/database/storedb.sqlite'
  })
 
module.exports = sequelize;