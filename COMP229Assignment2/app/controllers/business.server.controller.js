//const User = require('mongoose').model('Contactlist')
const mongoose  = require('../../config/mongoose')

// create a reference to the model
let Contactlist = require('../models/business.server.model')

//render Contactlist Page
        module.exports.rendercontactlist = (req, res, next) => {
            Contactlist.find((err, businesscontactlist) => {
                if(err)
                {
                    return console.error(err);
                }
                else
                {
                    res.render('businessContact/ContactList', 
                    {title: 'Business Contact List', 
                    contactList: businesscontactlist, 
                    });      
                }
            }).sort({ contactName: 'asc' }); //desc for descending
        }

//render Contactlist Add Page
        module.exports.renderAddContact = (req, res, next) => {
            res.render('businessContact/ContactAdd', 
            {title: 'Add Contact'}); 
            res.sendFile("/ContactAdd");}



 //Process Contactlist Add Page
        module.exports.processAddContact = (req, res, next)=> {
            let newContact = Contactlist({
                "contactName":req.body.contactName,
                "contactNumber":req.body.contactNumber,
                "email":req.body.email
            });
        
            Contactlist.create(newContact, (err, businesscontactlist) =>{
                if(err)
                {
                    console.log(err);
                    res.end(err);
                }
                else
                {
                               // refresh the book list
                               res.redirect('/ContactList');
                }
            })
        }