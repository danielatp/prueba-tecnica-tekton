const Sequelize = require('sequelize');

const Order = require('./order');
const Staff = require('./staff');
const Item = require('./item');

//associations here


module.exports = {
  Order,
  Staff,
  Item
};
