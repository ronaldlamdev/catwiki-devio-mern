const express = require('express');
const morgan = require('morgan');
const app = express();
const getBreeds = require('./routes/getBreeds');
const getDetails = require('./routes/getDetails');

app.use(morgan('dev'))
app.use(express.json())
app.use((req, res, next) => {
  console.log('Hello from the middleware');
  next();
} )

app.use(`/api.thecatapi.com/v1/breeds`, getBreeds)
app.use(`/api/thecatapi.com/v1/breeds`, getDetails)

module.exports = app;