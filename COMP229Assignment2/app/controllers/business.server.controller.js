//const User = require('mongoose').model('Contactlist')
const mongoose  = require('../../config/mongoose')

// create a reference to the model
let Contactlist = require('../models/business.server.model');
const { UserSchema } = require('../models/users.server.model');

//render Contactlist Page
module.exports.rendercontactlist = (req, res, next) => {
    // if(!req.user){
    //     req.flash('loginMessage', 'Must be signed in first to access this page.');
    //     return res.redirect("/login");
    // } else
    // {
        
   

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
            displayName: req.user ? req.user.displayName : ''
            });      
        }
    }).sort({ contactName: 'asc' }); //desc for descending
    

    }   
// }    

//render Contactlist Add Page
module.exports.renderAddContact = (req, res, next) => {
    res.render('businessContact/ContactAdd', 
    {title: 'Add Contact',
    displayName: req.user ? req.user.displayName : ''


}); 
    }



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
            // refresh the Contact list
            res.redirect('/ContactList');
        }
    })
}     

 //render Contactlist Edit Page
module.exports.renderEditPage = (req, res, next) => {
    let id = req.params.id;

    Contactlist.findById(id, (err, contantToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('businessContact/ContactUpdate', {title: 'Edit Contact', contactlist: contantToEdit, 
            displayName: req.user ? req.user.displayName : ''})
        }
    });
}   
 //Process Contactlist Edit Page
module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedContact = Contactlist({
        "_id": id,
        "contactName":req.body.contactName,
        "contactNumber":req.body.contactNumber,
        "email":req.body.email
    });

    Contactlist.updateOne({_id: id}, updatedContact, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the contact list
            res.redirect('/contactlist');
        }
    });
}