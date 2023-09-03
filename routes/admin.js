var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/login', function(req, res, next) {
  res.render('admin-login');
});
router.post('/login', validate, function(req, res, next) {
  res.redirect('/admin/broneering');
});
router.get('/broneering', function(req, res, next) {
  res.render('broneering');
});
router.post('/broneering', validate, function(req, res, next) {
  res.render('broneering');
});

async function validate(req, res, next) {
  if (req.header["X-auth-token"]) {
    next();
  } else {
    res.redirect('/admin/login');
  }
}

module.exports = router;
