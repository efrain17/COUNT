'use strict'

let mongoose = require('mongoose');
let config = require('../config.json');
let db;

exports.DBConnectMongoose = function() {
  return new Promise((resolve, reject)=> {
    mongoose.Promise = global.Promise;

    if (db) return resolve(db);

    mongoose.connect('mongodb://' + config.db_config.host + ":" + config.db_config.port + "/" + config.db_config.name, {
      useMongoClient: true
    })
    .then(() => {
      db = mongoose.connection;
      console.log('mongo connection created');
      resolve(db);
    })
    .catch(err => {
      console.log('error creating db connection: ' + err);
      reject(err);
    });
  });
};