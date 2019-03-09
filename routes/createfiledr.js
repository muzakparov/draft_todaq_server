var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
	res.json({
		data: {
			type: "file",
			attributes: {
				payload: {
					id: "1a3c1e04-ab62-4c44-b4a3-873f5d50c07d",
					type: "diagnosis",
					description: "malaria",
					treatment: "Atovaquone plus proguanil",
					dosage: "1 tablet per day",
					prescription: "30 tablets",
					date: "9 March 2019"
				}
			},
			relationships: {
				"initial-account": {
					data: {
						type: "account",
						id: "692e64b3-e252-43e7-a289-353f40945c4d"
					}
				},
				"file-type": {
					data: {
						id: "001"
					}
				}
			}
		}
	});
	// res.render('index', { title: 'Express' });
});

module.exports = router;
