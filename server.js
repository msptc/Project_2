var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');

var apiRoutes = require('./controllers/api-route.js');

var app = express();
var PORT = process.env.PORT || 8081;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(apiRoutes);
app.use('/', express.static(path.join(__dirname, 'public')));
require("./routes/html-route.js")(app);

app.listen(PORT, function() {
    console.log('App listening on', PORT);
});
