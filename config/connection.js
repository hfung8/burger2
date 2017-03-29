var Sequelize = require('sequelize');

var sequelize = new Sequelize("burgers_data", "root", "", {
  host: "127.0.0.1",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

module.exports = sequelize;
// if (process.env.JAWSDB_URL){
// 	connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
// var connection = mysql.createConnection({
// 	host:"localhost",
// 	user:"root",
// 	password:"",
// 	database:"burgers_db"
// });
// };
// connection.connect(function(err){
// 	if (err) throw err;
// 	console.log("connected as id " + connection.threadId);
// });

// module.exports = connection;