/**
 * Created by marcioheleno on 28/05/16.
 */
'use strict';
var mongoose = require('mongoose');
var Loc = mongoose.model("Location");

var sendJasonResponse = function (res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.locationsListByDistance = function (req, res) {
};

module.exports.locationsCreate = function (req, res) {
  sendJasonResponse(res, 200, {"status" : "successs"});
};

module.exports.locationsReadOne = function (req, res) {
  sendJasonResponse(res, 200, {"status" : "successs"});
};

module.exports.locationsUpdateOne = function (req, res) {
  sendJasonResponse(res, 200, {"status" : "successs"});
};

module.exports.locationsDeleteOne = function (req, res) {
};