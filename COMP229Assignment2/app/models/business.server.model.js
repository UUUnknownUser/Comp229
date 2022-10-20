// business.server.model.js Kwun Hing Lau 301230390  10/19/2022

//require modules for the Business Model

let mongoose                    = require('mongoose')
let passportLocalMongoose       = require('passport-local-mongoose')
let Schema                      = mongoose.Schema


let contactSchema= new Schema({
    contactName:String,
    contactNumber:String,
    email:String
},{
    collection: "contactlists"
});


module.exports =mongoose.model('Contactlist',contactSchema);

