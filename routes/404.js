var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('404/index');
});

module.exports = router;