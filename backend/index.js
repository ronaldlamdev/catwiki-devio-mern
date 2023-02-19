const express = require('express');
const morgan = require('morgan');
const app = express();
const getRouter = require('./routes/getRoute');

app.use(morgan('dev'))
app.use(express.json())
app.use((req, res, next) => {
  console.log('Hello from the middleware');
  next();
} )

app.use(`/api.thecatapi.com/v1/breeds`, getRouter)

module.exports = app;