var businessController = require('../controllers/business.server.controller')
var express = require('express');  
var app = express();  
var bodyParser = require('body-parser');  

//For guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        req.flash('loginMessage', 'Must be signed in first to access this page.');
        return res.redirect('/login');
    }
    next();
}



module.exports = function(app) {
   
    //get Business Contact List Page

    app.get('/contactlist',requireAuth,businessController.rendercontactlist)
    app.get('/contactlistadd',requireAuth,businessController.renderAddContact)
    app.post('/add',requireAuth,businessController.processAddContact);
    app.get('/contactlistedit/:id',requireAuth,businessController.renderEditPage)
    app.post('/contactlistedit/:id',requireAuth,businessController.processEditPage)
    app.get('/contactlistdelete/:id',requireAuth,businessController.performDelete)
}



