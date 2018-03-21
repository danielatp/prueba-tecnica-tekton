const Sequelize = require('sequelize');

const db = new Sequelize('postgres://localhost:5432/tekton-test', {logging: false});

module.exports = db;
