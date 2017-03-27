var express = require("express");
var router = express.Router();
var burgers = require("../models/burgers.js");

router.get("/api/burgers", function(req,res){
	burgers.findAll({}).then(function(results){
		res.json(results);
	})
})
module.exports = router;