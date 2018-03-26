const express = require('express');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const db = require('./db');
const path = require('path');

const PORT = 3000;
const app = express();

const apiRouter = require('./api')
const authRouter = require('./auth')

app.use(volleyball)
app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, '..', '/public')))
app.use('/api', apiRouter)
app.use('/auth', authRouter)

app.use((err, req, res, next) => {
  console.error('problem here!')
  console.error(err)
  res.status(err.status || 500).send(err.message)
})

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'))
})

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
