const Sequelize = require('sequelize');
const database = require('../db');
 
const Customer = database.define('customer', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },

    name: {
      type: Sequelize.STRING,
      allowNull: false
    },

    email: {
      type: Sequelize.STRING,
      allowNull: false
    },

    cpf: {
      type: Sequelize.STRING,
      allowNull: false
    },

    birthday: {
      type: Sequelize.STRING,
      allowNull: false
    },

    address: {
      type: Sequelize.JSON,
      allowNull: false
    }
});
 
module.exports = Customer;