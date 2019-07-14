'use strict';

const express = require('express');
const router = require('./router/routes.js');
const notFound = require('./errors/404.js');
const errorHandler = require('./errors/error.js');
const app = express();

const PORT = process.env.PORT || 8080;

const timeOfRequest = (req, res, next) => {
  req.requestTime = Date(Date.now());
  console.log(`path: ${req.path}, time of request: ${req.requestTime}`);
  next();
};

const bSquared = function (number) {
  return function (req, res, next) {
    req.number = number * number;
    next();
  };
};

app.use(timeOfRequest);

app.get('/a', (req,res) => {
  res.status(200).send('Route A');
});

app.get('/b', bSquared(5), (req,res) => {
  res.status(200).send(`Route B: ${req.number}`);
});

app.use(router);

app.use(notFound);
app.use(errorHandler);
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
