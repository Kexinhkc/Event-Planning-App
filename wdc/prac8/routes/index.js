var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/add', function(req, res, next) {

  req.pool.getConnection(function(error,connection){
    if(error){
      console.log(error);
      res.sendStatus(500);
      return;
    }

    var firstname = req.body.firstname ;
    var lastname = req.body.lastname ;

    let query = "INSERT INTO actor (first_name,last_name) VALUES(?,?);";
    connection.query(query,[firstname,lastname], function(error, rows, fields) {
      connection.release(); // release connection
      if (error) {
        console.log(error);
        res.sendStatus(500);
        return;
      }
      res.end();
    });

  });



});


router.get('/actors', function(req, res, next) {
  req.pool.getConnection(function(error,connection){
    if(error){
      console.log(error);
      res.sendStatus(500);
      return;
    }

    let query = "SELECT first_name, last_name FROM actor;";
    connection.query(query, function(error, rows, fields) {
      connection.release(); // release connection
      if (error) {
        console.log(error);
        res.sendStatus(500);
        return;
      }

      res.send(rows);
    });

  });
});



module.exports = router;
