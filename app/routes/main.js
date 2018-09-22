const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();



// create express app
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

module.exports = (app) =>{

//simple  route
app.get('/', (req, res) => {
    res.json('Welcome to hope page!');
});
}
module.exports = router;