const Sequelize = require('sequelize');

const Order = require('./order');
const Staff = require('./staff');
const Item = require('./item');

//associations
Order.hasMany(Item);
Item.belongsToMany(Order, {through: 'OrderItem'});

module.exports = {
  Order,
  Staff,
  Item
};
