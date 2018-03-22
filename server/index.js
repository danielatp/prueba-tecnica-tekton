const express = require('express');
const volleyball = require('volleyball');
const db = require('./db/index');
const path = require('path');

const PORT = 3000;
const app = express();

const apiRouter = require('./api')

//.use for all methods, like middleware
app.use(volleyball)
app.use(express.static(path.join(__dirname, '/public')))
app.use('/api', apiRouter)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
  db.sync({force:false})
  .then( () => {
    console.log('db sync')
  })
  .catch( err => {
    console.error('db is NOT connected!')
    console.error(err)
  })
})
