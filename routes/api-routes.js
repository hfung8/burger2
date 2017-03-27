var express = require("express");
var db = require("../models/post.js");

module.exports = function(app){

// app.get("/", function(req,res){
// 	res.render("index");
// })
app.get("/", function(req,res){
	res.render("index");
})

app.post("/burgers/create", function(req,res){
	db.burgers.create({
		burgerName: req.body.burger_name,
		devoured: req.body.devoured
	})
})

// app.get("/api/all", function(req,res){
// 	db.burgers.findAll({})
// 	.then(function(results){
// 		res.render("index", {results});
// 	});
// });


}