var fs = require('fs');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	var lang = req.query.lang;
	if (lang !== 'en' && lang !== 'es')
		lang = 'en';
	var langFile = lang + '.json';
	fs.readFile('lang/' + langFile, function(err, data) {
		if (err) 
			throw err;
		res.render('index', { lang: JSON.parse(data) });
	});	
});

router.get('/services/', function(req, res) {
	var lang = req.query.lang;
	if (lang !== 'en' && lang !== 'es')
		lang = 'en';
	var langFile = lang + '.json';
	fs.readFile('lang/' + langFile, function(err, data) {
		if (err) 
			throw err;
		res.render('services', { lang: JSON.parse(data) });
	});	
});

router.get('/gallery/', function(req, res) {
	var lang = req.query.lang;
	if (lang !== 'en' && lang !== 'es')
		lang = 'en';
	var langFile = lang + '.json';
	fs.readFile('lang/' + langFile, function(err, data) {
		if (err) 
			throw err;
		res.render('gallery', { lang: JSON.parse(data) });
	});	
});

router.get('/about/', function(req, res) {
	var lang = req.query.lang;
	if (lang !== 'en' && lang !== 'es')
		lang = 'en';
	var langFile = lang + '.json';
	fs.readFile('lang/' + langFile, function(err, data) {
		if (err) 
			throw err;
		res.render('about', { lang: JSON.parse(data) });
	});	
});

router.get('/contact/', function(req, res) {
	var lang = req.query.lang;
	if (lang !== 'en' && lang !== 'es')
		lang = 'en';
	var langFile = lang + '.json';
	fs.readFile('lang/' + langFile, function(err, data) {
		if (err) 
			throw err;
		res.render('contact', { lang: JSON.parse(data) });
	});	
});


module.exports = router;
