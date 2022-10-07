process.env.NODE_ENV=process.env.NODE_ENV||'development';

var express = require('./config/express');
var app=express();



var HOST='localhost'
var PORT =process.env.PORT||3000;


app.listen(PORT);
module.exports=app;
console.log(`Server running at http://${HOST}:${PORT}/`);

