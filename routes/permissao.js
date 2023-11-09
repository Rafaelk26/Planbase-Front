var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('adm/cadastro/permissao');
});

module.exports = router;