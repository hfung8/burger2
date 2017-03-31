var bodyParser = require('body-parser');
var express = require('express');
var methodOverride = require('method-override');
var app = express();
var PORT = process.env.PORT || 3306;


app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(methodOverride('_method'));

var exphbs = require('express-handlebars');
 
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + "/public"));

require("./routes/api-routes.js")(app);
var db = require("./models");

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});




