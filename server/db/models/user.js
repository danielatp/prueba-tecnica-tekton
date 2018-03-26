const crypto = require('crypto');
const Sequelize = require('sequelize');
const db = require('../db');

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  email:{
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: {msg: 'email inválido'}
    }
  },
  password: {
    type: Sequelize.STRING
  },
  salt: {
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

User.prototype.correctPassword = function (candidatePwd) {
  return User.encryptPassword(candidatePwd, this.salt) === this.password
}

User.generateSalt = function () {
  return crypto.randomBytes(16).toString('base64')
}

User.encryptPassword = function (plainText, salt) {
  return crypto
    .createHash('RSA-SHA256')
    .update(plainText)
    .update(salt)
    .digest('hex')
}

//HOOKS
const setSaltAndValidateTekton = user => {
  if(!user.email.includes('tekton')){
    throw new Error(`EMAIL MUST CONTAIN WORD 'TEKTON'!`)
    return sequelize.Promise.reject(`EMAIL MUST CONTAIN WORD 'TEKTON'!!`)
  }
  if (user.changed('password')){
    user.salt = User.generateSalt()
    user.password = User.encryptPassword(user.password, user.salt)
  }
}

User.beforeCreate(setSaltAndValidateTekton)
User.beforeUpdate(setSaltAndValidateTekton)

module.exports = User;
