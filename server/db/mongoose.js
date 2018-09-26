var mongoose = require('mongoose');

// Configure mongoose to connect to mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/test');

module.exports={mongoose};
