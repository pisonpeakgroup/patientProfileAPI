const express = require('express');
const router = express.Router();


module.exports = (app) =>{
//required control module
//const made = require('./app/controllers/main.controller');
const profiles = require('../app/controllers/profile.controller');

    // Create a new profile
   // app.get('/', made.create);

    // Create a new profile
    app.post('/profiles', profiles.create);

    // Retrieve all profiles
    app.get('/profiles', profiles.findAll);

    // Retrieve a single profile with profileId
    app.get('/profiles/:profileId', profiles.findOne);

    // Update a profile with profileId
    app.put('/profiles/:profileId', profiles.update);

    // Delete a profile with profileId
    app.delete('/profiles/:profileId', profiles.delete);
}
    
module.exports = router;