var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {

  // And insert something like this instead:
  res.sendFile("localhost:3001/images/CROPS/Image A/Q3_CROPS_ImageA_300x600.jpg")
});

module.exports = router;
