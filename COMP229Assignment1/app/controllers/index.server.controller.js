// index.server.controller.js Kwun Hing Lau 301230390  10/4/2022


//used to render a view and give properties define local variables for the view
exports.renderHome=function(req,res){
    if(req.session.lastVisit){
        console.log(req.session.lastVisit);
    }
    req.session.lastVisit=new Date();
    
    res.render('HomePage',{
        title:'Home Page',
        
    })
};

exports.renderAboutMe=function(req,res){
    if(req.session.lastVisit){
        console.log(req.session.lastVisit);
    }
    req.session.lastVisit=new Date();
    
    res.render('AboutMe',{
        title:'About Me',
        
    })
};
exports.renderProject=function(req,res){
    if(req.session.lastVisit){
        console.log(req.session.lastVisit);
    }
    req.session.lastVisit=new Date();
    
    res.render('ProjectPage',{
        title:'Project Page'
    })
};
exports.renderService=function(req,res){
    if(req.session.lastVisit){
        console.log(req.session.lastVisit);
    }
    req.session.lastVisit=new Date();
    
    res.render('ServicesPage',{
        title:'Services Page'
    })
};
exports.renderContact=function(req,res){
if(req.session.lastVisit){
        console.log(req.session.lastVisit);
    }
    req.session.lastVisit=new Date();
    
    res.render('Contact',{
        title:'Contact'
    })
};

