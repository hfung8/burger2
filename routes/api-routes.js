var express = require("express");
var burgers = require("../models/post.js")

module.exports = function(app){

// app.get("/", function(req,res){
// 	res.render("index");
// })
app.get("/", function(req,res){
	res.render("index");
})

app.post("/burgers/create", function(req,res){
	burgers.create({
		burgerType: req.body.burger_name,
	}).then(function(dbPost){
		res.json(dbPost);
	});
});

// app.get("/api/all", function(req,res){
// 	db.burgers.findAll({})
// 	.then(function(results){
// 		res.render("index", {results});
// 	});
// });


}