var db = require('./index.js');

var burgers = sequelize.define('burgers', {
	id: {
		type: Sequelize.INTEGER
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
