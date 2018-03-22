const Sequelize = require('sequelize');
const db = require('../db');

const Staff = db.define('staff', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  email:{
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  isChef: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  isCashier: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Staff;
