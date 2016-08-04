'use strict'

let express = require('express');
let app = express();
let morgan = require('morgan');
let port = process.env.PORT || 3000;
let basic_routes = require('./routes/basic');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let user_routes = require('./routes/user');
let path = require('path');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

let DB_URI = process.env.DB || 'mongodb://localhost:27017/db';
mongoose.connect(DB_URI);
let db = mongoose.connection;
db.on('error', function(err){
	console.error('Could not connect to db, error: ' + err);
});

//setting engine and view dir
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.locals.pretty = true;

//setting static files dir
app.use('/static', express.static(path.join(__dirname, '/public')));

//setting logger
app.use(morgan('dev'));

//routes

app.use('/', basic_routes);
app.use('/users', user_routes);
//app.use('/static', express.static(path.join(__dirname + '/public')));

app.listen(port, function(){
	console.log('Server started on port: ', port);
});
