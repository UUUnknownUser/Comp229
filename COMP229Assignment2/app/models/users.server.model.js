// users.server.model.js Kwun Hing Lau 301230390  10/19/2022

//require modules for the User Model

let mongoose                    = require('mongoose')
let passportLocalMongoose       = require('passport-local-mongoose')
let Schema                      = mongoose.Schema

const UserSchema = new Schema
(
    {
        username: {
            type:       String,
            default:    '',
            trim:       true,
            required:   'Username is required'
        },
        email: {
            type:       String,
            default:    '',
            trim:       true,
            required:   'Email is required'
        },
        displayName: {
            type:       String,
            default:    '',
            trim:       true,
            required:   'Display Name is required'
        },
        created: {
            type:       Date,
            default:    Date.now
        },
        update: {
            type:       Date,
            default:    Date.now
        },
    },
    {
        collection:     'users' //?'users'?
    }
)

// //configure options for User Model
let options = ({ missingPasswordError: 'Wrong / Missing Password' })
UserSchema.plugin(passportLocalMongoose, options)
module.exports.UserSchema =mongoose.model("User", UserSchema)