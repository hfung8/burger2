var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var burgers = sequelize.define('burgers_data', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	burgerType:{
		type: Sequelize.STRING
	},
	devoured:{
		type: Sequelize.BOOLEAN,
		defaultValue: false
	}
});

burgers.sync();

module.exports = burgers;
