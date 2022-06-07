var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'landingPage' });
});

// router.post('/login.html', function(req, res, next) {
//   var id = req.body.credentials;
//   console.log(id)
//   res.end();
// });

router.post('/login', (req, res) => {
  const { password, token } = req.body.data;
  jwt.verify(token, process.env.JWT_WEB_SECRET, (err, decoded) => {
  if(err){
  res.status(401).json({errors: "Invalid token"})
  }
  else{
  res.json({});
  User.findOne({ _id: decoded._id }).then(user => {
  if(user) {
  user.setPassword(password);
  user.save().then(() => res.json({}));
  } else {
  res.status(400).json({ errors: { global : "Invalid token" }})
  }
  })
  }
  });
  });

module.exports = router;
