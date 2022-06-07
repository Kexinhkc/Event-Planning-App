var express = require('express');
var router = express.Router();
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client("1006345318538-06u5fqd3sur2bthaea307jtjalc33f3r.apps.googleusercontent.com");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'landingPage' });
});

router.post('/login', function(req, res, next) {
  if ('token' in req.body) {
    async function verify() {
      const ticket = await client.verifyIdToken({
          idToken: req.body.token,
          audience: 1006345318538-06u5fqd3sur2bthaea307jtjalc33f3r.apps.googleusercontent.com,  // Specify the CLIENT_ID of the app that accesses the backend
          // Or, if multiple clients access the backend:
          //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
      });
      const payload = ticket.getPayload();
      const userid = payload['sub'];
      // If request specified a G Suite domain:
      // const domain = payload['hd'];
    }
    verify().catch(console.error);
  }
});


module.exports = router;
