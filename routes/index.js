var express = require('express');
var router = express.Router();

var indexController = require('../controllers/indexController')

/* GET home page. */
router.get('/', indexController.home);
router.get('/produtos', indexController.produtos)
router.get('/login', indexController.login)

module.exports = router;
