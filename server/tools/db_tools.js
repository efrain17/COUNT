'use strict'

var pg = require('pg')
var config = require('../config.json')
var acquireCount = 0

global.pool = new pg.Pool(config)

console.log(global.pool)

global.pool.on('error', (err, client) => {
  console.error('idle client error', err.message, err.stack)
})

global.pool.on('acquire', function (client) {
  acquireCount++
  console.log(acquireCount)
})

exports.query = function(myquerry) {
  return new Promise((resolve, reject) => {
    global.pool.connect((err, client, done) => {
      if (err) return reject(err)
      client.query(myquerry, (err, result) => {
        done()
        if (err) return reject(err)
        resolve(result.rows)
      })
    })
  })
}

exports.DBConnect = function() {
  return new Promise((resolve, reject) => {
  	global.pool = new pg.Pool(config)
	global.pool.on('error', (err, client) => {
	  console.error('idle client error', err.message, err.stack)
	})
	console.log('me conecte');
	if(global.pool) return resolve(pool);
	else return reject();
  });
};