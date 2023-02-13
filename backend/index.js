require('dotenv').config()
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
  })
})

app.get('/siamesecat', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      name: 'Siamese Twins'
    }
  })
})

app.listen(process.env.PORT, () => console.log('Listening on port', process.env.PORT))