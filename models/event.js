let mongoose = require('mongoose');

let eventSchema = mongoose.Schema({
    hour: {
      type: String
    },
    title: {
       type: String
    },
    author: {
        type: String,
        require: true,
        default: "User"
    },
    date: {
        type: Date,
        default: Date.now
    },
    checked: {
        type: Boolean,
        default: false
    }

});

module.exports = mongoose.model('Event', eventSchema);