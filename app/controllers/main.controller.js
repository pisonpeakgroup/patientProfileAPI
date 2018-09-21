const index = require('../models/profiles.model.js');

// Create and Save a new index
exports.create = (req, res) => {
    // Validate request
    if(!req.body.surname) {
        return res.status(400).send({
            message: "index surname can not be empty"
        });
        //Validate firstname
         if(!req.body.firstname) {
        return res.status(400).send({
            message: "index firstname can not be empty"
        });
         //Validate sex
         if(!req.body.sex) {
        return res.status(400).send({
            message: "index sex can not be empty"
        });
        //Validate age
         if(!req.body.age) {
        return res.status(400).send({
            message: "index age can not be empty"
        });
        //Validate country
         if(!req.body.country) {
        return res.status(400).send({
            message: "index country can not be empty"
        });
    }

    // Create a index
    const profile = new index({
        firstname: req.body.firstname || "Personal index", 
        surname: req.body.surname,
        othername: req.body.othername,
        sex: req.body.sex,
    age: req.body.age,
    facilitynumber: req.body.facilitynumber,
    healthprofessional: req.body.healthprofessional,
    date:req.body.date,
    country: req.body.country
    });

    // Save index in the database
    profile.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the index."
        });
    });
};

// Retrieve and return all profiles from the database.
exports.findAll = (req, res) => {
    index.find()
    .then(profiles => {
        res.send(profiles);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving profiles."
        });
    });
};

// Find a single profile with a profileId
exports.findOne = (req, res) => {
    index.findById(req.params.profileId)
    .then(profile => {
        if(!profile) {
            return res.status(404).send({
                message: "index not found with id " + req.params.profileId
            });            
        }
        res.send(profile);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "index not found with id " + req.params.profileId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving profile with id " + req.params.profileId
        });
    });
};

// Update a profile identified by the profileId in the request
exports.update = (req, res) => {
    // Validate surname
    if(!req.body.surname) {
        return res.status(400).send({
            message: "index surname can not be empty"
        });
        //Validate firstname
         if(!req.body.firstname) {
        return res.status(400).send({
            message: "index firstname can not be empty"
        });
         //Validate sex
         if(!req.body.sex) {
        return res.status(400).send({
            message: "index sex can not be empty"
        });
        //Validate age
         if(!req.body.age) {
        return res.status(400).send({
            message: "index age can not be empty"
        });
        //Validate country
         if(!req.body.country) {
        return res.status(400).send({
            message: "index country can not be empty"
        });
    }

    // Find profile and update it with the request body
    index.findByIdAndUpdate(req.params.profileId, {
        firstname: req.body.firstname || "Personal index",
        surname: req.body.surname,
        othername: req.body.othername,
    sex: req.body.sex,
    age: req.body.age,
    facilitynumber: req.body.facilitynumber,
    healthprofessional: req.body.healthprofessional,
    date:req.body.date,
    country: req.body.country
    }, {new: true})
    .then(profile => {
        if(!profile) {
            return res.status(404).send({
                message: "index not found with id " + req.params.profileId
            });
        }
        res.send(profile);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "index not found with id " + req.params.profileId
            });                
        }
        return res.status(500).send({
            message: "Error updating profile with id " + req.params.profileId
        });
    });
};

// Delete a profile with the specified profileId in the request
exports.delete = (req, res) => {
    index.findByIdAndRemove(req.params.profileId)
    .then(profile => {
        if(!profile) {
            return res.status(404).send({
                message: "index not found with id " + req.params.profileId
            });
        }
        res.send({message: "index deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "index not found with id " + req.params.profileId
            });                
        }
        return res.status(500).send({
            message: "Could not delete profile with id " + req.params.profileId
        });
    });
};
         }
        }
    }
}
}
}
}
}
