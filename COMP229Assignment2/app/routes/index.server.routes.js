// index.server.router.js Kwun Hing Lau 301230390  10/4/2022

//using get method to route paths
module.exports=function(app){
    var index=require('../controllers/index.server.controller');
    
    //get Home Page
    app.get('/',index.renderHome);
    app.get('/Home',index.renderHome);

    //get About Me Page
    app.get('/AboutMe',index.renderAboutMe);

    //get Project Page
    app.get('/Project',index.renderProject);

    //get Service Page
    app.get('/Service',index.renderService);

    //get Contact Page
    app.get('/Contact',index.renderContact);
    
};