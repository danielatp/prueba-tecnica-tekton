const express = require('express');
const volleyball = require('volleyball');

const PORT = 3000;
const app = express();

//.use for all methods, like middleware
app.use(volleyball)

app.get('/', (req, res) => {
  res.send('hola!')
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
