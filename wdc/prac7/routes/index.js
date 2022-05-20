var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* 1.1*/
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

/* 1.2*/
var preVal = "first";
router.post('/pass-it-on', function(req, res, next) {
  var message = req.body.message;

  if (message===null||req.body.submit===null){
    res.sendStatus(400);

  }else{
    res.send(preVal);
    preVal = message;
  }

});

/* 2.2 */
router.post('/*', function(req, res, next){
  if (req.method==="POST"){
console.log("POST from a user");
  }
next();

});

/* 3.1 */
router.get('/cookie',function(req,res,next){
  if ('task3_1' in req.cookies){
      console.log(req.cookies);
       console.log(parseInt(req.cookies.task3_1)+1);
      res.cookie('task3_1',parseInt(req.cookies.task3_1)+1);
  }
 else{
     res.cookie('task3_1',1);
}

 res.send();
});


module.exports = router;
