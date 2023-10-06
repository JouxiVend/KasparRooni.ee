const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/kontakt', function(req, res, next) {
  res.render('kontakt');
});
router.get('/minust', function(req, res, next) {
  res.render('minust');
});
router.get('/teenused', function(req, res, next) {
  res.render('teenused');
});
router.get('/broneering', function(req, res, next) {
  res.render('broneering');
});

module.exports = router;
