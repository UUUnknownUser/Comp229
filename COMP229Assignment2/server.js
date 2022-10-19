process.env.NODE_ENV=process.env.NODE_ENV||'development';



let configMongoose      = require('./config/mongoose')
let express             = require('./config/express');

let app                 = express();
let db                  = configMongoose()

var HOST='localhost'
var PORT =process.env.PORT||3000;


app.listen(PORT);
module.exports=app;
console.log(`Server running at http://${HOST}:${PORT}/`);

