const router = require('express').Router();

// router.use('/staff', require('./staff'))
router.use('/orders', require('./orders'))
router.use('/items', require('./items'))

router.use((req, res, next) => {
  const error = new Error('Not Found!!')
  error.status = 404
  next(error)
})

module.exports = router;
