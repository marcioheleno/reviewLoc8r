/**
 * Created by marcioheleno on 28/05/16.
 */
'use strict';

var mongoose = require('mongoose');

var comentarioSchema = new mongoose.Schema({
  autor : String,
  classificacao : {
    type: Number,
    required: true,
    min: 0,
    max: 5
  },
  comentario : String,
  dataComent : {
    type : Date,
    default : Date.now
  }
});
var openingTimeSchema = new mongoose.Schema({
  days : {
    type : String,
    required : true
  },
  Open : String,
  Closer : String,
  quandoFecha : {
    type: Boolean,
    required: true
  }
});
var locationSchema = new mongoose.Schema({
  name : {
    type : String,
    required: true
  },
  address : String,
  rating : {
    type: Number,
    "default" : 0,
    min: 0,
    max: 5
  },
  facilites : [String],
  coord : {
    type : [Number],
    index: '2dsphere'
  },
  openingTime : [openingTimeSchema],
  comments: [comentarioSchema]
});

mongoose.model('Location', locationSchema);