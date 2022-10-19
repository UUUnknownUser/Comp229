// express.js Kwun Hing Lau 301230390  10/4/2022

//installed 3rd party packages
let config          =require('./env/development')
let express         =require('express')
let morgan          =require('morgan')
let compress        =require('compression')
let bodyParser      =require('body-parser')
let methodOverride  =require('method-override')


 //modules for authentication

 let session        =require('express-session')
 let passport       =require('passport')
 let pasportlocal   =require('passport-local').Strategy



module.exports=function(){
    var app=express();

    if(process.env.NODE_ENV==='development'){
        app.use(morgan('dev'));
    }else if(process.env.NODE_ENV === 'production'){
        app.use(compress());
    }

  

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(methodOverride());

    // Initialize express-session
    app.use(session({
        saveUninitialized:true,
        resave:true,
        secret:config.sessionSecret
    }));

    // Initialize passport 
    app.use(passport.initialize())
    app.use(passport.session())

    //create a User Model Instance
    let userModel=require('../app/models/users.server.model.js');
    let User=userModel.UserSchema

    // // Serialize and Deserialize User info
    // passport.serializeUser(User.serializeUser())
    // passport.deserializeUser(User.deserializeUser())


    app.set('views','./app/views/pages');
    app.set('view engine','ejs');

    app.use(express.static('./public'));

    require('../app/routes/index.server.routes.js')(app);
    require('../app/routes/users.server.routes.js')(app);
    require('../app/routes/business.server.routes.js')(app);
    


    return app;

    
}