let mongoose = require('mongoose');

/// article Schema

let articleSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    body: {
        type: String,
        require: true
    },
    date: { 
        type: Date, 
        default: Date.now 
    }
});
 module.exports = mongoose.model('Article', articleSchema);
