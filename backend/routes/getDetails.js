const express = require('express');
const getDetails = require('../controllers/detailsController')
const router = express.Router();

router.param('breed', (req, res, next, val) => {
  console.log(`Breed is ${val}`);
  next();
});



router
  .route('/:breed')
  .get(getDetails.checkBreed, getDetails.getDetails)

module.exports = router;