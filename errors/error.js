'use strict';


module.exports = (err,req,res,next) => {
  console.log('In the error handler');
  res.status(500);
  res.send(err);
};
