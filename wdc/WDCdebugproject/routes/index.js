var express = require('express');
var router = express.Router();
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client("1006345318538-06u5fqd3sur2bthaea307jtjalc33f3r.apps.googleusercontent.com");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'landingPage' });
});

////////////////////////////////////////////////////////////////////////////////

router.post('/login', function(req, res, next) {

  // console.log("inside route")

  if ('email' in req.body && 'password' in req.body) {

      req.pool.getConnection(function(error,connection){
        if(error){
          console.log("connection error")
          console.log(error);
          res.sendStatus(500);
          return;
        }

        let query = "SELECT first_name,last_name, email FROM users WHERE email = ? AND password = ?;";
        connection.query(query,[req.body.email,req.body.password],function(error, rows, fields) {
          connection.release(); // release connection
          if (error) {
            console.log("query error")
            console.log(error);
            res.sendStatus(500);
            return;
          }

          if (rows.length > 0){
            console.log('success');
            req.session.user = req.body.email;
            res.sendStatus(200);
          }else{
            console.log('bad login');
            res.sendStatus(401);
          }

          });
        });

  }else if ('token' in req.body) {

        let email =null;
        async function verify() {
          const ticket = await client.verifyIdToken({
              idToken: req.body.token,
              audience: '1006345318538-06u5fqd3sur2bthaea307jtjalc33f3r.apps.googleusercontent.com',  // Specify the CLIENT_ID of the app that accesses the backend
              // Or, if multiple clients access the backend:
              //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
          });
          const payload = ticket.getPayload();
          const userid = payload['sub'];
          console.log(userid)
          email = payload['email'];
          // email = payload['email'];
        }
        // verify().then(function).catch(console.error);//////
        verify().then(function(){

          req.pool.getConnection(function(error,connection){
            if(error){
              console.log("connection error")
              console.log(error);
              res.sendStatus(500);
              return;
            }

            let query = "SELECT first_name,last_name,email FROM users WHERE email = ?;";
            connection.query(query,[email],function(error, rows, fields) {
              connection.release(); // release connection
              if (error) {
                console.log("query error")
                console.log(error);
                res.sendStatus(500);
                return;
              }

              if (rows.length > 0){
                console.log('success');
                req.session.user = req.body.email;
                res.sendStatus(200);
              }else{
                console.log('bad login');
                res.sendStatus(401);
              }

              });
            });
          }).catch(function(){
          res.sendStatus(401);
        });

  } else {
    console.log('bad request');
    res.sendStatus(400);
  }

});

////////////////////////////////////////////////////////////////////////////////
router.get('/test', function(req, res, next) {
  if('user' in req.session){
    res.json(req.session.user);
  } else {
    res.send('This is a test');
  }
});

////////////////////////////////////////////////////////////////////////////////

router.post('/adminLogin', function(req, res, next) {

  if ('email' in req.body && 'password' in req.body) {

      req.pool.getConnection(function(error,connection){
        if(error){
          console.log("connection error")
          console.log(error);
          res.sendStatus(500);
          return;
        }

        let query = "SELECT email FROM admin WHERE email = ? AND password = ?;";
        connection.query(query,[req.body.email,req.body.password],function(error, rows, fields) {
          connection.release(); // release connection
          if (error) {
            console.log("query error")
            console.log(error);
            res.sendStatus(500);
            return;
          }

          if (rows.length > 0){
            console.log('success');
            req.session.user = req.body.email;
            res.sendStatus(200);
          }else{
            console.log('bad login');
            res.sendStatus(401);
          }

          });
        });

  }else if ('token' in req.body) {

        let email =null;
        async function verify() {
          const ticket = await client.verifyIdToken({
              idToken: req.body.token,
              audience: '1006345318538-06u5fqd3sur2bthaea307jtjalc33f3r.apps.googleusercontent.com',  // Specify the CLIENT_ID of the app that accesses the backend
              // Or, if multiple clients access the backend:
              //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
          });
          const payload = ticket.getPayload();
          const userid = payload['sub'];
          console.log(userid)
          email = payload['email'];
          // email = payload['email'];
        }
        // verify().then(function).catch(console.error);//////
        verify().then(function(){

          req.pool.getConnection(function(error,connection){
            if(error){
              console.log("connection error")
              console.log(error);
              res.sendStatus(500);
              return;
            }

            let query = "SELECT email FROM admin WHERE email = ?;";
            connection.query(query,[email],function(error, rows, fields) {
              connection.release(); // release connection
              if (error) {
                console.log("query error")
                console.log(error);
                res.sendStatus(500);
                return;
              }

              if (rows.length > 0){
                console.log('success');
                req.session.user = req.body.email;
                res.sendStatus(200);
              }else{
                console.log('bad login');
                res.sendStatus(401);
              }

              });
            });
          }).catch(function(){
          res.sendStatus(401);
        });

  } else {
    console.log('bad request');
    res.sendStatus(400);
  }

});

////////////////////////////////////////////////////////////////////////////////

router.post('/userAccount', function(req, res, next) {

  if ('email' in req.body && 'password' in req.body) {

    console.log("in the route")

      req.pool.getConnection(function(error,connection){
        if(error){
          console.log("connection error")
          console.log(error);
          res.sendStatus(500);
          return;
        }

        console.log("connected to database")
        let query = "INSERT INTO users VALUES (?,?,?,?);";
        connection.query(query,[req.body.email, req.body.password, req.body.last_name, req.body.first_name],function(error, rows, fields) {

          connection.release(); // release connection
          if (error) {
            console.log("query error")
            console.log(error);
            res.sendStatus(500);
            return;
          }
           req.session.user = req.body.email;
            res.sendStatus(200);

          });
        });

  // } //else if ('token' in req.body) {

  //       let email =null;
  //       async function verify() {
  //         const ticket = await client.verifyIdToken({
  //             idToken: req.body.token,
  //             audience: '1006345318538-06u5fqd3sur2bthaea307jtjalc33f3r.apps.googleusercontent.com',  // Specify the CLIENT_ID of the app that accesses the backend
  //             // Or, if multiple clients access the backend:
  //             //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
  //         });
  //         const payload = ticket.getPayload();
  //         const userid = payload['sub'];
  //         console.log(userid)
  //         email = payload['email'];
  //         // email = payload['email'];
  //       }
  //       // verify().then(function).catch(console.error);//////
  //       verify().then(function(){

  //         req.pool.getConnection(function(error,connection){
  //           if(error){
  //             console.log("connection error")
  //             console.log(error);
  //             res.sendStatus(500);
  //             return;
  //           }

  //           let query = "SELECT email FROM admin WHERE email = ?;";
  //           connection.query(query,[email],function(error, rows, fields) {
  //             connection.release(); // release connection
  //             if (error) {
  //               console.log("query error")
  //               console.log(error);
  //               res.sendStatus(500);
  //               return;
  //             }

  //             if (rows.length > 0){
  //               console.log('success');
  //               //req.session.user = row[0];
  //               res.sendStatus(200);
  //             }else{
  //               console.log('bad login');
  //               res.sendStatus(401);
  //             }

  //             });
  //           });
  //         }).catch(function(){
  //         res.sendStatus(401);
  //       });

  } else {
    console.log('bad request because no email and password');
    res.sendStatus(400);
  }

});

////////////////////////////////////////////////////////////////////////////////
router.post('/logout', function(req, res, next) {
  console.log("log out routes");

  if('user' in req.session){
     delete req.session.user;
   // req.session.destroy();
  }
  res.end();

});




router.post('/searchUsers', function (req, res, next) {
  //Connect to the database
  req.pool.getConnection( function(err,connection) {
    if (err) {
      res.sendStatus(500);
      console.log(err);
      return;
    }

    var query = "SELECT * FROM users WHERE email = ?;";
    console.log(req.body);
    connection.query(query, [req.body.email], function (err, rows, fields) {
      connection.release(); // release connection
      if (err) {
        res.sendStatus(500);
        console.log(err);
        return;
      }
      console.log(rows);
      res.json(rows[0]);
    });
  });
});

router.post('/searchEvents', function (req, res, next) {
  //Connect to the database
  req.pool.getConnection( function(err,connection) {
    if (err) {
      res.sendStatus(500);
      console.log(err);
      return;
    }

    var query = "SELECT * FROM events WHERE event_name = ?;";
    connection.query(query, [req.body.event_name], function (err, rows, fields) {
      connection.release(); // release connection
      if (err) {
        res.sendStatus(500);
        console.log(err);
        return;
      }
      res.json(rows[0]);
    });
  });
});

router.post('/manageUsers', function (req, res, next) {
  //Connect to the database
  req.pool.getConnection( function(err,connection) {
    if (err) {
      res.sendStatus(500);
      console.log(err);
      return;
    }

    var query = "UPDATE users SET password = ?, first_name = ?, last_name = ? WHERE email = ?;";
    connection.query(query, [req.body.password,req.body.first_name,req.body.last_name,req.body.email], function (err, rows, fields) {
      connection.release(); // release connection
      if (err) {
        res.sendStatus(500);
        console.log(err);
        return;
      }
      res.sendStatus(200);
    });
  });
});

router.post('/manageEvents', function (req, res, next) {
  //Connect to the database
  req.pool.getConnection( function(err,connection) {
    if (err) {
      res.sendStatus(500);
      console.log(err);
      return;
    }

    var query = "UPDATE events SET description = ? WHERE event_name = ?;";
    connection.query(query, [req.body.d,req.body.event], function (err, rows, fields) {
      connection.release(); // release connection
      if (err) {
        res.sendStatus(500);
        console.log(err);
        return;
      }
      res.sendStatus(200);
    });
  });
});

router.post('/deleteUsers', function (req, res, next) {
  //Connect to the database
  req.pool.getConnection( function(err,connection) {
    if (err) {
      res.sendStatus(500);
      console.log(err);
      return;
    }

    var query = "DELETE FROM users WHERE email = ?;";
    console.log(req.body);
    connection.query(query, [req.body.email], function (err, rows, fields) {
      connection.release(); // release connection
      if (err) {
        res.sendStatus(500);
        console.log(err);
        return;
      }
      res.sendStatus(200);
    });
  });
});

router.post('/deleteEvents', function (req, res, next) {
  //Connect to the database
  req.pool.getConnection( function(err,connection) {
    if (err) {
      res.sendStatus(500);
      console.log(err);
      return;
    }

    var query = "DELETE FROM events WHERE event_name = ?;";
    console.log(req.body);
    connection.query(query, [req.body.event], function (err, rows, fields) {
      connection.release(); // release connection
      if (err) {
        res.sendStatus(500);
        console.log(err);
        return;
      }
      res.sendStatus(200);
    });
  });
});

router.post('/createAdmins', function (req, res, next) {
  //Connect to the database
  req.pool.getConnection( function(err,connection) {
    if (err) {
      res.sendStatus(500);
      console.log(err);
      return;
    }

    var query = "INSERT INTO admin VALUES (?, ?);";
    console.log(req.body);
    connection.query(query, [req.body.email,req.body.password], function (err, rows, fields) {
      connection.release(); // release connection
      if (err) {
        res.sendStatus(500);
        console.log(err);
        return;
      }
      res.sendStatus(200);
    });
  });
});

router.get('/showTime', function (req, res, next) {
  //Connect to the database
  req.pool.getConnection( function(err,connection) {
    if (err) {
      res.sendStatus(500);
      console.log(err);
      return;
    }

    var query = "SELECT timestamp, Count(timestamp) as times FROM availaility GROUP BY timestamp ORDER BY times DESC LIMIT 1;";
    connection.query(query, function (err, rows, fields) {
      connection.release(); // release connection
      if (err) {
        res.sendStatus(500);
        console.log(err);
        return;
      }
      res.json(rows[0]);
    });
  });
});

router.post('/collectTimes', function (req, res, next) {
  //Connect to the database
  req.pool.getConnection( function(err,connection) {
    if (err) {
      res.sendStatus(500);
      console.log(err);
      return;
    }

    var query = "INSERT INTO availaility VALUES (?, ?);";
    console.log(req.body);
    connection.query(query, [req.body.date,req.body.id], function (err, rows, fields) {
      connection.release(); // release connection
      if (err) {
        res.sendStatus(500);
        console.log(err);
        return;
      }
      res.sendStatus(200);
    });
  });
});

router.post('/createEvents', function (req, res, next) {
  //Connect to the database
  req.pool.getConnection( function(err,connection) {
    if (err) {
      res.sendStatus(500);
      console.log(err);
      return;
    }

    var query = "INSERT INTO events VALUES (NULL, ?, ?);";
    console.log(req.body);
    connection.query(query, [req.body.name,req.body.d], function (err, rows, fields) {
      connection.release(); // release connection
      if (err) {
        res.sendStatus(500);
        console.log(err);
        return;
      }
      res.sendStatus(200);
    });
  });
});

router.get('/profile', function (req, res, next) {
  //Connect to the database
  req.pool.getConnection( function(err,connection) {
    if (err) {
      res.sendStatus(500);
      console.log(err);
      return;
    }

    var query = "SELECT * FROM users WHERE password = ?, first_name = ?, last_name = ? WHERE email = ?;";

    connection.query(query, [req.query.password,req.query.first_name,req.query.last_name,req.query.email], function (err, rows, fields) {
      connection.release(); // release connection
      if (err) {
        res.sendStatus(500);
        console.log(err);
        return;
      }
      res.sendStatus(200);
    });
  });
});

router.post('/userEvents', function (req, res, next) {
  //Connect to the database
  req.pool.getConnection( function(err,connection) {
    if (err) {
      res.sendStatus(500);
      console.log(err);
      return;
    }

    var query = "SELECT * FROM events WHERE event_name = ?;";
    connection.query(query, [req.body.event_name], function (err, rows, fields) {
      connection.release(); // release connection
      if (err) {
        res.sendStatus(500);
        console.log(err);
        return;
      }
      res.json(rows[0]);
    });
  });
});


router.get('/profile', (req, res, next) => {
  if(!('user' in req.session))
  {
    res.sendstatus(500);
    return;
  }
  else
  {
  email = req.session.user;
  req.pool.getConnection( function(err,connection) {
         if (err) {
           res.sendStatus(500);
           return;
         }
         var query = "SELECT * FROM users WHERE email = ?;";
         connection.query(query, [email], function(err, rows, fields) {
         connection.release(); // release connection

       //   if (err)
       //   {
       //     res.send('1');
       //   }
           res.json(rows[0]);
         });
     });
  }
});

module.exports = router;

