const Sequelize = require('sequelize');
const database = require('../database/config');
 
const Product = database.define('product', {
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

    image: {
      type: Sequelize.STRING,
      allowNull: false
    },

    description: {
      type: Sequelize.STRING,
      allowNull: false
    },

    weight: {
      type: Sequelize.STRING,
    },

    price: {
      type: Sequelize.FLOAT,
      allowNull: false
    },

    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
});
 
module.exports = Product;