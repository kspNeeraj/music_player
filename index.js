//importing express
const express = require('express');
const app = express();
//stting up port
const port= 8000;
//importing express-ejs-layouts
const expressLayouts= require('express-ejs-layouts');

//path to static files of assets
app.use(express.static('./assets'));

//setting up view engine
app.set('view engine','ejs');
app.set('views' , './views');

//using express layouts middleware
app.use(expressLayouts);

//setting up routeds for controller
app.use('/',require('./routes'));


//app listening on port
app.listen(port,function(err){
    if(err){
        console.log('error in start');
    }
    console.log("server has started");
});