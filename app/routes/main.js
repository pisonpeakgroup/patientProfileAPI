const express = require('express');
const router = express.Router();


//simple redirecting route
router.get('/', function(req, res, next){
    res.redirect('/profiles');
});
module.exports = router;