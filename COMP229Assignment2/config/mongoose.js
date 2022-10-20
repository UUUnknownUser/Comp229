// mongoose.js Kwun Hing Lau 301230390  10/19/2022

const config = require('./env/development')
const mongoose = require('mongoose')

module.exports = function() {
    const db = mongoose.connect(config.db)
    require('../app/models/users.server.model')
    require('../app/models/business.server.model')

    return db
}