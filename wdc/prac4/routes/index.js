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
      res.send(time);
    }else{
      count++;
      time = new Date();
      res.send(time);
    });

router.get('/color.html', function(req, res, next) {

    if (count==0){
    count++;
    res.send(time);
    }else{
    count++;
    time = new Date();
    res.send(time);

});

module.exports = router;
