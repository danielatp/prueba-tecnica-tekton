const Sequelize = require('sequelize');
const db = require('../db');

const Staff = db.define('staff', {
  name: Sequelize.STRING
})

module.exports = Staff;
