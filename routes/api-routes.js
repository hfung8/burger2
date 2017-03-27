var express = require("express");
var db = require("../models/post.js");

module.exports = function(app){

app.get("/api/all", function(req,res){
	db.burgers.findAll({})
	.then(function(results){
		res.json(results);
	});
});


}