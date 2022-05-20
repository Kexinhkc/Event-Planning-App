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


router.post('/combine', function(req, res, next){
  var sentence='';
  var lines=[];
  lines=req.body.lines;
  var suffix=req.body.suffix;

  for (let i =0;i<lines.length;i++){
      sentence=sentence+lines[i]+suffix+'\n';
  }

  res.send(sentence);

  });

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
