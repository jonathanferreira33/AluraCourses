var mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin:admin123@clustertest.o1gkohr.mongodb.net/?appName=ClusterTest");

let db = mongoose.connection;

module.exports = db;
