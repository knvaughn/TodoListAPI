var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo-api', { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });

mongoose.Promise = Promise;

module.exports.Todo = require('./todo');