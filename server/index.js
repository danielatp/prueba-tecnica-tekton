const express = require('express');
const volleyball = require('volleyball');
const db = require('./db/index');
const path = require('path');

const PORT = 3000;
const app = express();

//.use for all methods, like middleware
app.use(volleyball)
app.use(express.static(path.join(__dirname, '/public')))

app.get('/', (req, res) => {
  res.send('hola!')
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
  db.sync({force:true})
  .then( () => {
    console.log('db sync')
  })
  .catch( err => {
    console.error('db is NOT connected!')
    console.error(err)
  })
})
