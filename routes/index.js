var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
	res.json({ a: 1 });
	// res.render('index', { title: 'Express' });
});

module.exports = router;
