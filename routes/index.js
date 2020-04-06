var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('home', { title: 'Home'});
});

router.get('/home', (req, res) => {
  res.render('home', { title: 'Home'});
});

router.get('/icpc', (req, res) => {
  res.render('icpc', { title: 'ICPC'});
});

router.get('/bigO', (req, res) => {
  res.render('bigO', { title: 'Big O'});
});

router.get('/progteam', (req, res) => {
  res.render('progteam', { title: 'ProgTeam'});
});

module.exports = router;
