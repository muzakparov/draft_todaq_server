var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
	res.json({
		data: {
			attributes: {
				metadata: { dispensed: false }
			},
			relationships: {
				sender: {
					data: {
						type: "account",
						id: "692e64b3-e252-43e7-a289-353f40945c4d"
					}
				},
				recipient: {
					data: {
						type: "account",
						id: "f7437823-2d26-47f8-a018-168e7cf10d7c"
					}
				},
				files: {
					data: [
						{
							type: "file",
							id:
								"e124eb86ff56fd6c2693bc0cbc529ddb88216d60130d8f305eb87f44fd9b66c0"
						}
					]
				}
			}
		}
	});
	// res.render('index', { title: 'Express' });
});

module.exports = router;
