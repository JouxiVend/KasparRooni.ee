var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.send('admin-login');
});
router.post('/login', function(req, res, next) {
  res.send('admin-login');
});
router.get('/broneeringud', validate, function(req, res, next) {

});

async function validate(req, res, next) {
  
  next();
}

module.exports = router;
