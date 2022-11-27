var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'RMsoft' });
});

router.use('/item', require('./itemInfo'));
router.use('/company', require('./registeredCompany'));
router.use('/buyer', require('./buyer'));
router.use('/purchase', require('./purchaseInfo'));

module.exports = router;
