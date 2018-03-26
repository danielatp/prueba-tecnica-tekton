const Sequelize = require('sequelize');
const db = require('../db');

const Item = db.define('item', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  // image: {
  //   type: Sequelize.STRING,
    // defaultValue:
  // },
  category: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Item;
