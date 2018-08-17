var fs = require('fs');
var nodemailer = require('nodemailer');
var express = require('express');
var router = express.Router();
var langRoute = './lang/';

router.get('/', function(req, res) {
  var lang = req.query.lang;
  if (lang !== 'en' && lang !== 'es')
    lang = 'es';
  var langFile = lang + '.json';
  fs.readFile(langRoute + langFile, function(err, data) {
    if (err)
      throw err;
    res.render('index', { lang: JSON.parse(data) });
  });
});

router.post('/email', function(req, res) {
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'paradisetourstransport.contact@gmail.com',
      pass: 'paradise1234pass'
    }
  });
  var mailOptions = {
    from: req.body.email,
		to: 'dspa29@hotmail.com',
		subject: req.body.subject,
		text: req.body.text
	};

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      res.status(500).json({error: error});
    } else {
      res.status(200).json({});
    };
  });
});

router.get('/services', function(req, res) {
  var lang = req.query.lang;
  if (lang !== 'en' && lang !== 'es')
    lang = 'es';
  var langFile = lang + '.json';
  fs.readFile(langRoute + langFile, function(err, data) {
    if (err)
      throw err;
    res.render('services', { lang: JSON.parse(data) });
  });
});

router.get('/gallery', function(req, res) {
  var lang = req.query.lang;
  if (lang !== 'en' && lang !== 'es')
    lang = 'es';
  var langFile = lang + '.json';
  fs.readFile(langRoute + langFile, function(err, data) {
    if (err)
      throw err;
    res.render('gallery', { lang: JSON.parse(data) });
  });
});

router.get('/about', function(req, res) {
  var lang = req.query.lang;
  if (lang !== 'en' && lang !== 'es')
    lang = 'es';
  var langFile = lang + '.json';
  fs.readFile(langRoute + langFile, function(err, data) {
    if (err)
      throw err;
    res.render('about', { lang: JSON.parse(data) });
  });
});

router.get('/contact', function(req, res) {
  var lang = req.query.lang;
  if (lang !== 'en' && lang !== 'es')
    lang = 'es';
  var langFile = lang + '.json';
  fs.readFile(langRoute + langFile, function(err, data) {
    if (err)
      throw err;
    res.render('contact', { lang: JSON.parse(data) });
  });
});

router.get('/googled5aa149259436c16.html', function(req, res){
	res.render('google');
});

module.exports = router;