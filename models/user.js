const mongoose = require('mongoose');

/// User Schema 
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        require: true
    },
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: String,
        enum: ['User', 'Manager', 'Admin'],
        default: 'User'
    }
});


const User = module.exports = mongoose.model('User', UserSchema);