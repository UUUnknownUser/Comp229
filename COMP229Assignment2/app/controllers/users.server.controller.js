//const User = require('mongoose').model('User')
const mongoose  = require('../../config/mongoose')
const User      = require('../models/users.server.model')


exports.create = function (req, res, next) {
    
    const user = new User(req.body)

    user.save((err) => {
        if (err) {
            return next(err)
        } else {
            res.status(200).json(user)
        }
    })
}

exports.list = function (req, res, next) {
    User.find({}, (err, users) => {
        if (err) {
            return next(err)
        } else {
            res.status(200).json(users)
        }
    })
}


// Render login page 
exports.renderLogin = (req, res, next) => {
    if (!req.user) {
        res.render('login', {
            title: 'Login',
            // alert: 'User Does Not Exist',
            displayName: req.user ? req.user.displayName : ''
        })
    } else {
        res.redirect('/')
    }
}

// Process Login of User
exports.loginUser = async (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return next(err)
        }

        //check user login error
        if (!user) {
            console.log('Authentication Error')
            return res.redirect('/login')
        }

        req.login(user, (err) => {
            if (err) {
                return next(Err)
            }
            res.redirect('/')
        })
    })(req, res, next)
}

