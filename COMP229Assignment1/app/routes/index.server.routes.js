// index.server.router.js Kwun Hing Lau 301230390  10/4/2022

//using get method to route paths
module.exports=function(app){
    var index=require('../controllers/index.server.controller');
    app.get('/',index.renderHome);
    app.get('/Home',index.renderHome);
    app.get('/AboutMe',index.renderAboutMe);
    app.get('/Project',index.renderProject);
    app.get('/Service',index.renderService);
    app.get('/Contact',index.renderContact);
    
};