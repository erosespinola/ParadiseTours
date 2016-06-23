var fs = require('fs');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	var langFile = 'es.mx.json';
	fs.readFile('lang/' + langFile, function(err, data) {
		if (err) 
			throw err;
		res.render('index', { lang: JSON.parse(data) });
	});	
});

/* GET services page. */
router.get('/services', function(req, res) {
	var langFile = 'es.mx.json';
	fs.readFile('lang/' + langFile, function(err, data) {
		if (err) 
			throw err;
		res.render('services', { lang: JSON.parse(data) });
	});	
});

module.exports = router;
