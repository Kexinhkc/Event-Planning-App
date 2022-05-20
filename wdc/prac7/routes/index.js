var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/brew', function(req, res, next) {
  var drink = req.query.drink;

  if (drink == "tea"){
    res.send('A delicious cup of tea!');
  }else if (drink == "coffee"){
    res.sendStatus(418);
  }else{
    res.sendStatus(400);
  }

});

router.get('/pass-it-on', function(req, res, next) {
  var message = req.body.message;

  if (message == null){
    res.sendStatus(400);
  }else{
    res.sendStatus(418);
  }

});
module.exports = router;
