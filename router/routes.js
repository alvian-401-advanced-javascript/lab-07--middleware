'use strict';

const express = require('express');

const onlyD = require('../middleware/onlyD.js');

const router = express.Router();

router.get('/c', routeChandler);

router.get('/d', onlyD, routeDhandler);

function routeChandler (req, res) {
  res.status(200).send('Route C');
}

function routeDhandler (req, res) {
  res.status(200).send('Route D');
}


module.exports = router;