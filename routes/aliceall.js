var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
	res.json({
		type: "account",
		data: {
			attributes: {
				"account-type": "individual",
				"admin-email": "alicetrcokett@example.com",
				contact: {
					email: "alicetrcokett@example.com",
					phone: "01702 345666",
					"last-name": "Alice",
					"first-name": "Trockett",
					address: {
						city: "Westcliff",
						country: "UK",
						"postal-code": "SS1 7RZ",
						"province-region": "Essex",
						"street-address-1": "26 Crescent Gardens"
					}
				}
			}
		}
	});
	// res.render('index', { title: 'Express' });
});

module.exports = router;
