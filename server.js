var bodyParser = require('body-parser');
var express = require('express');
var methodOverride = require('method-override');
var app = express();
var PORT = process.env.PORT || 3306;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(methodOverride('_method'));

var exphbs = require('express-handlebars');
 
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var router = require("./routes/api-routes.js");
require("./routes/html-routes.js")(app);

app.use("/", router);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });





