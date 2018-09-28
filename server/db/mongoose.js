var mongoose = require('mongoose');

// Configure mongoose to connect to mongodb
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI||'mongodb://localhost:27017/test');

module.exports={mongoose};
