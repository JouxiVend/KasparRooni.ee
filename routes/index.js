var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/kontakt', function(req, res, next) {
  res.render('kontakt', { title: 'Express' });
});
router.get('/minust', function(req, res, next) {
  res.render('minust', { title: 'Express' });
});
router.get('/teenused', function(req, res, next) {
  res.render('teenused', { title: 'Express' });
});

module.exports = router;
