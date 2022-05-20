var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* 1.4 */
var posts=[];

router.post('/addpost', function(req, res, next){
    if ("title" in req.body && "content" in req.body) {
        var post;
        post=req.body;
        posts.unshift(post);
        res.end();
    }
    else {
        res.sendStatus(400);
    }

});

router.get('/getposts', function(req, res, next){
  res.json(posts);
});



/* 2.2 */
router.post('/*', function(req, res, next){
  if (req.method==="POST"){
console.log("POST from a user");
  }
next();

});




module.exports = router;
