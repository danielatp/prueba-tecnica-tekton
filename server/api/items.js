const router = require('express').Router();
const { Item } = require('../db/models');

router.get('/', (req, res, next) => {
  Item.findAll()
  .then(items => res.json(items))
  .catch(next)
})

router.get('/:itemId', (req, res, next) => {
  Item.findById(req.params.itemId)
  .then(item => res.json(item))
  .catch(next)
})

module.exports = router;
