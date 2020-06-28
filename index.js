//importing express
const express = require('express');
//importing cookie-parser
const cookieparser=require('cookie-parser');
const app = express();
//stting up port
const port= 8000;

//importing noty for flah message
const Noty = require('noty');
//importing express-ejs-layouts
const expressLayouts= require('express-ejs-layouts');

//importing lints
const ejslints = require('ejs');
//importing db
const db= require('./config/mongoose');



//importing express-session for session cookies
const session = require('express-session');
//importing passport
const passport = require('passport');
//importing passport for local authentication
const passportLocal = require('./config/passport-local-strategy');

//importing google strategy
const passportGoggle = require('./config/passport-google-oauth-strategy');

//importing connect-mongo to store session extra argument is use
const mongostore = require('connect-mongo')(session);
//importing flash
const flash = require('connect-flash-plus');
//custom middleware for flash message
const customWare= require('./config/middleware');
//importing sassmiddleware 
const sassMiddleware = require('node-sass-middleware');
//converting scss files to css
app.use(sassMiddleware({
        //source where files is store
        src: './assets/scss',
        //where files has to store after converting
        dest: './assets/css',
        debug: true,
        outputStyle:'expanded',
        prefix: '/css'

}));

//cookie parser use to store cookie
app.use(cookieparser());
//body parser is use to decode the incoming request
app.use(require('body-parser').urlencoded({ extended: true }));

//path to static files of assets
app.use(express.static('./assets'));

//using express layouts middleware
app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


//setting up view engine
app.set('view engine','ejs');
app.set('views' , './views');

//mongo store is use to store the session cookie in db
app.use(session({
    //name of cookie
    name:'musicplayer',
    //key to encode and decode //todo change before deployement in production
    secret:'randomtext',
    //when user is not logged in do we have to store extra data answer is no so its is false
    saveUninitialized:false,
    //if session is already save no need to save it again no!
    resave:false,
    //max age of cookie
    cookie:{
        maxAge : (1000 * 60 * 10000)
    },
    store: new mongostore(
        {
            mongooseConnection: db,
            autoRemove: 'disabled'

        },
        function(err){
            console.log(err || 'connect-mongodb setup ok');
        }
    )
    

}));

app.use(passport.initialize());
//if pasport.session is not working
app.use(passport.authenticate('session'));

//to access the user data in views
app.use(passport.setAuthenticatedUser);

//save the  flash message 
app.use(session({
    secret: 'keyboard cat',
    cookie: { maxAge: 60000 }
  }));
//to use flah messages
app.use(flash());
app.use(customWare.setFlash);


//setting up routeds for controller
app.use('/',require('./routes'));

//app listening on port
app.listen(port,function(err){
    if(err){
        console.log('error in start');
    }
    console.log("server has started");
});
