'use strict';

let express = require('express');
let bodyparser = require('body-parser');
let path = require('path');
let db_tools = require('./tools/db_tools');

const port = process.env.PORT || 9000;

let app = express();
let config = require('./config.json');
let routes = require('./routes/routes');

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


