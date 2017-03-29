var express = require("express");
var burgers = require("../models/post.js")

module.exports = function(app){


app.post("/burgers/create", function(req,res){
	burgers.create({
		burgerType: req.body.burgerType,
	}).then(function(dbPost){
		res.redirect("/");
	});
});

app.get("/", function(req,res){
	burgers.findAll({})
	.then(function(burger_data){
		res.render("index", {burger_data});
	});
});

app.put("/burgers/update", function(req,res){
	var update = req.body;
	burgers.update({
		devoured: true
	},{
		where:{
			id: {
				$eq: update.burger_id
			}
		}
	}).then(function(result){
		console.log(result);
		res.redirect("/");
	})

})

}