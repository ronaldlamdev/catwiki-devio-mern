const express = require('express');
const getController = require('../controllers/getController')
const router = express.Router();

router
  .route('/')
  .get(getController.getCat)

module.exports = router;