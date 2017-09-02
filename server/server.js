'use strict';

var express = require('express');
var bodyparser = require('body-parser');
var path = require('path');
var db_tools = require('./tools/db_tools');

const port = process.env.PORT || 9000;

var app = express();
var config = require('./config.json');
var routes = require('./routes/routes');

db_tools.DBConnectMongoose()
.then(() => {

    app.use(bodyparser.urlencoded({extended: true}));
	app.use(bodyparser.json({limit: '10mb'}));

	app.use('/', express.static(__dirname + '/../client/dist'));
	app.all('/app/*', (req, res) => {
	  res.status(200).sendFile(
	    path.join(__dirname, '/../client/dist/index.html'));
	})

	routes.assignRoutes(app);
	app.listen(port, () => console.log(`Server listening on port ${port}`));
})
.catch(err => console.log('Error: ' + err));


