const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    name: String,
    title: String,
    about: String,
    skills: [String],
    email: String,
    phone: String,
    location: String,
    cvUrl: String,
    social: {
        github: String,
        linkedin: String,
        twitter: String,
        facebook: String
    }
});

module.exports = mongoose.model('Profile', profileSchema);
