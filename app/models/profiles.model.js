const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = mongoose.Schema({
    firstname: String,
    surname: String,
    othername: String,
    sex: String,
    age: Number,
    facilitynumber: Number,
    healthprofessional: String,
    date: Date,
    country: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Profile', ProfileSchema);