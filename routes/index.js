var fs = require('fs');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	console.log("hola");

	var langFile = 'es.mx.json';
	fs.readFile('lang/' + langFile, (err, data) => {
		if (err) 
			throw err;
		res.render('index', { lang: JSON.parse(data) });
	});	
});

module.exports = router;
