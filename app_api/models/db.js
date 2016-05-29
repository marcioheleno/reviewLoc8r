/**
 * Created by marcioheleno on 28/05/16.
 */
'use strict';

var mongoose = require('mongoose');
var graceFullShutdown;
var dbURI = 'mongodb://localhost/Loc8r';
if (process.env.NODE_ENV === 'production') {
  dbURI = process.env.MONGODB_URI;
}
mongoose.connect(dbURI);

// // Eventos de Conexao
mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error', function (err) {
  console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});
mongoose.connection.on('open', function () {
  console.log('Mongoose default connection is open')
});


// Capiturando Evento de restart
graceFullShutdown = function (msg, callback) {
  mongoose.connection.close(function () {
    console.log('Mongoose esta disconectado ' + msg);
    callback();
  });
};

// Reiniciado pelo nodemon
process.once('SIGUSR2', function () {
  graceFullShutdown('nodemon restart', function () {
    process.kill(process.pid, 'SIGUSR2');
  });
});

// Reiniciado pelo Terminal
// process.on('SIGINT', function () {
//   mongoose.connection.close(function () {
//     console.log('Mongoose default connection disconnected through app termination');
//     process.exit(0)
//   });
// });

// Reiniciando pelo Terminal
process.on('SIGINT', function () {
  graceFullShutdown('Heroku app termination', function () {
    process.exit(0);
  })
});

// // Reiniciado pelo Heroku
// process.on('SIGTERM', function () {
//   graceFullShutdown('Heroku app shutdown', function () {
//     process_params.exit(0);
//   });
// });

// SCHEMAS & MODEL
require('./locations');