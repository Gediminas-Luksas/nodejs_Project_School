const express = require('express');
const router = express.Router();

/// Event Modet 
let Event = require('../models/event');
let User = require('../models/user');

router.get('/add', ensureAuthenticated, function(req, res){
    res.render('add_event', {
        title: 'Add Event Date'
    });
});


/// Add Submint Event 
router.post('/add', function(req, res){
    req.checkBody('hour', 'Hour is required').notEmpty();
    req.checkBody('title', 'Text is required').notEmpty();

    let errors = req.validationErrors();

    if(errors){
        res.render('add_event', {
            title: 'Add Event',
            errors: errors
        });
    } else {
        let event = new Event();
        event.hour = req.body.hour;
        event.title = req.body.title;

        event.save(function(err){
            if(err){
                console.log(err);
            } else {
                req.flash('success', 'Event Added');
                res.redirect('/users/event')
            }
        });
    }
});





/// Update Submit POST 

router.post('/edit/:id',function(req, res){
    let event = {};
    event.checked = req.body.checkbox ? true : false;
    event.author = req.body.author;
    
    let query = {_id:req.params.id};
    if (event.checked !== true){
        req.flash('danger', 'Your not have Event time jet');
        res.redirect('/users/event');
    } else {

        Event.update(query, event, function(err){
            if(err){ 
                console.log(err);
            } else {
                req.flash('success', 'Now you have Event');
                res.redirect('/users/event');
            }
});
    }
});

/// get event

router.get('/edit/:id', ensureAuthenticated, function(req, res){
    Event.findById(req.params.id, function(err, event){
        User.findById(event.author, function(err, user){
            res.render('edit_event', {
                title: 'Check your information',
                event: event,
                
            });
        });
    });
});



/// Accsess Control 
function ensureAuthenticated(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }   else {
        req.flash('danger', 'Please login');
        res.redirect('/users/login');
    }
}



module.exports = router;