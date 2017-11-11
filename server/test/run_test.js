require('babel-core/register')();

let mongoose = require('mongoose');
mongoose.Promise = Promise;

let Jasmine = require('jasmine');
let jasmine = new Jasmine();

jasmine.loadConfig({
	spec_dir: '',
	spec_files: [
	  '**/**[sS]pec.js'
	]
})

mongoose.connect('mongodb://localhost/testing')
.then(() => {
  mongoose.connection.db.dropDatabase(()=> {
    jasmine.execute();
  });
})
.catch(err => {
  console.error.bind(console, 'connection error:')
});