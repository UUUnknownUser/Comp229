var userController = require('../controllers/users.server.controller')



module.exports = function(app) {
    app.route('/users').get(userController.list)

    //get Login Page
    app.get('/login', userController.renderLogin)

    app.post('/', userController.loginUser)

    app.get('/logout', userController.performLogout);

   
}