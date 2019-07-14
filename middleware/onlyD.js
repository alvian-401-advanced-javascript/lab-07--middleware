'use strict';
const notFound = require('../errors/404.js');

module.exports = (req, res, next) => {
  console.log('D path middleware');
  console.log(`path is ${req.path}`);

  if (req.path === '/d') {
    next('d path error');
  }
};