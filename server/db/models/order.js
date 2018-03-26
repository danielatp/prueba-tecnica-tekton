const Sequelize = require('sequelize');
const db = require('../db');

const Orders = db.define('orders', {
  status: {
    type: Sequelize.ENUM,
    values: ['comanda', 'en proceso', 'terminado'],
    defaultValue: 'comanda'
  }
})

module.exports = Orders;
