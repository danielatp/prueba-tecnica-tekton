const router = require('express').Router();
const { User } = require('../db/models');

router.get('/me', (req, res) => {
  res.json(req.user)
});

router.post('/login', (req, res, next) => {
  return User.findOne({where: {email: req.body.email}})
  .then(user => {
    if(!user){
      let err = new Error('usuario incorrecto')
      err.status = 401;
      throw err;
    }else if(!user.correctPassword(req.body.password)){
      let err = new Error('password incorrecto');
      err.status = 401
      throw err;
    }else{
      return user;
    }
  })
  .then( user => res.json(user)) // !!!!!!!
  .catch(next)
});


module.exports = router;
