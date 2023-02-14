require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
  })
})

app.listen(process.env.PORT, () => console.log('Listening on port', process.env.PORT))