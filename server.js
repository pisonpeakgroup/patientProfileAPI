const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 5000;


// create express app
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// use cors to enable the cross origin resource support
app.use(cors());

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
	useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

//routes
const routes = require('./app/routes/main');
const profile = require('./app/routes/profile.routes');
app.use('/', routes);
app.use('/profiles', profile);

//simple  route
app.get('/', (req, res) => {
    res.json('Welcome to hope page!');
});
app.use('/', routes);


// listen for requests
app.listen(5000, () => {
    console.log("Server is listening on PORT "  + 5000);
});