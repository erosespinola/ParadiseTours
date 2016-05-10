var fs = require('fs');
var express = require('express');
var router = express.Router();
/* GET home page. */

var langFile = 'es.mx.json';

router.get('/', function(req, res) {
	var encoding = 'utf8';
	var lang = fs.readFileSync('lang/' + langFile, encoding);
	res.render('index', { lang: JSON.parse(lang) });
});

module.exports = router;
