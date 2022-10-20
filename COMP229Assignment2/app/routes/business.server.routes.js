var businessController = require('../controllers/business.server.controller')
var express = require('express');  
var app = express();  
var bodyParser = require('body-parser');  

module.exports = function(app) {
   
    //get Business Contact List Page

    app.get('/contactlist',businessController.rendercontactlist)
    app.get('/contactlistadd',businessController.renderAddContact)
    app.post('/add',businessController.processAddContact);
    app.get('/contactlistedit/:id',businessController.renderEditPage)
    app.post('/contactlistedit/:id',businessController.processEditPage)
}



