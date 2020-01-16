/* *************************************************

VERB        ROUTE                   DESCRIPTION
====================================================
GET         /api/todos              List all todos
POST        /api/todos              Create new todo
GET         /api/todos/:todoId      Retrieve a todo
PUT         /api/todos/:todoId      Update a todo
DELETE      /api/todos/:todoId      Delete a todo

************************************************* */

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.json({message: 'hello from the root route'});
});

app.use('/api/todos', todoRoutes);

app.listen(3000, function(){
    console.log('Starting app on port 3000...');
});