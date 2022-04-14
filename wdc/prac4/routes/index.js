var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

var count = 0;
var time;
router.get('/last.txt', function(req, res, next) {

    if (count==0){
      count++;
      res.send(" ");

    }else{
      time = new Date();
      res.send(time);
    }
});

var colorCount = 0;
var color = ["red","yellow","green","blue"];
var colorSelected;
router.get('/color.html', function(req, res, next) {

      colorCount=colorCount%4;

      colorSelected=color[colorCount];
      colorCount++;

    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <title>Color</title>
     <meta charset="UTF-8">
    </head>

    <body>
        <h1 style="color:${colorSelected}">${colorSelected}</h1>

    </body>

</html>`);
});

module.exports = router;