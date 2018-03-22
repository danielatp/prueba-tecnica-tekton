const router = require('express').Router();
const { Order, Item } = require('../db/models');

router.get('/', (req, res, next) => {
  Order.findAll({include: {model: Item}})
  .then(orders => res.json(orders))
})

router.get('/:orderId', (req, res, next) => {
  Order.findById(req.params.orderId)
  .then(order => res.json(order))
  .catch(next)
})

module.exports = router;
