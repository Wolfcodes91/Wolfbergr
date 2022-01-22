var express = require('express');
var router = express.Router();
var burgersCtrl = require('../controllers/burgers');
var isLoggedIn = require('../config/auth');


router.get('/', burgersCtrl.index);

router.get('/new', isLoggedIn, burgersCtrl.new);



module.exports = router;