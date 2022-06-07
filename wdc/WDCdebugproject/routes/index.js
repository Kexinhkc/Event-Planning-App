var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'landingPage' });
});

router.post('/login.html', function(req, res, next) {
  var id = req.credentials;
  console.log(id)
});

module.exports = router;
