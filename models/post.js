var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var burgers = sequelize.define('burgers', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	burger_name:{
		type: Sequelize.STRING
	},
	devoured:{
		type: Sequelize.BOOLEAN,
		defaultValue: false
	}
});

burgers.sync();

module.exports = burgers;