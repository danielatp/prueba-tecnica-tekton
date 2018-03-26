const Sequelize = require('sequelize');

const Order = require('./order');
const User = require('./user');
const Item = require('./item');

//associations
Order.hasMany(Item);
Item.belongsToMany(Order, {through: 'OrderItem'});

module.exports = {
  Order,
  User,
  Item
};
