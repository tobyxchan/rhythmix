const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// Put API routes here, before the "catch all" route

// The "catch all" route
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

const port = process.env.PORT || 3001;
	
app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});