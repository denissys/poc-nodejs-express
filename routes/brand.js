
/*RESTFul API Router*/
var express = require('express');

module.exports = (function (){
  'use strict';
  var brands = express.Router();

  brands.get('/', function (req, res){
    res.send(200, [{"id":1,"name":"Adidas"}]);
  });  

  return brands;
})();
