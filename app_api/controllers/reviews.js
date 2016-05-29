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

module.exports.reviewsCreate = function (req, res) {
  sendJasonResponse(res, 200, {"status" : "success"});
};

module.exports.reviewsReadOne = function (req, res) {
  sendJasonResponse(res, 200, {"status" : "success"});
};

module.exports.reviewsUpdateOne = function (req, res) {
  sendJasonResponse(res, 200, {"status" : "success"});
};

module.exports.reviewsDeleteOne = function (req, res) {
  sendJasonResponse(res, 200, {"status" : "success"});
};