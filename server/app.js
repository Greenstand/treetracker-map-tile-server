const express = require('express');
const bodyParser = require('body-parser');
const HttpError = require("./utils/HttpError");
const {errorHandler} = require("./routes/utils");
const log = require("loglevel");
const helper = require("./routes/utils");

const app = express();


app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json

//routers
//app.use('/entity', entityRouter);

//paths
//app.get('/entity', asyncHandler(async (req, res, next) => {
//
//}));

// Global error handler
app.use(errorHandler);

const version = require('../package.json').version
app.get('*',function (req, res) {
  res.status(200).send(`Welcome to Greenstand tile server, version:${version}`);
});


module.exports = app; 
