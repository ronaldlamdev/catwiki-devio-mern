const express = require('express');
const getBreeds = require('../controllers/breedsController')
const router = express.Router();

router
  .route('/')
  .get(getBreeds.getBreeds)

module.exports = router;