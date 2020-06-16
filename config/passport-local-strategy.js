//import passport
const passport = require('passport');

//import local strategy
const LocalStrategy = require('passport-local').Strategy;

//importing user
const User = require('../models/user');

//passport to use local startegy
passport.use(new LocalStrategy({
    //sysntax
    usernameField:'email',
    //allow us to put req in function
    passReqToCallback:true
    //done is a callback function reporing back to passport
    },function(req,email,password,done){
            //find a user and establish the identity
            User.findOne({email:email},function(err,user){
                if(err){
                    req.flash('error',err);
                    //return err to passport
                    return done(err);
                }
                if(!user || user.password!= password){
                    req.flash('error','invalid username or password');
                    return done(null,false);
                    //authentication is failed
                }

                return done(null,user);
            })
    }
));


//serializing the user to decide which key is to be kept in cookies
passport.serializeUser(function(user,done){
    done(null,user.id);
    //encrypt the cookie
});

//deserilaizing the user from the key in cookies
passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
        if(err){
            console.log('error in finding user passportjs');
            //return err to passport
            return done(err);
        }
        return done(null,user)
    })
});

//sending user data to current views
//check if user is authenticated //it will use as middleware
passport.checkAuthentication = function(req,res,next){
    //how would you find out if the req is authenticcated passport has a method isauthenticated
    if(req.isAuthenticated()){
            //if user is authenticated then pass on the request to the next function(controllers)
            return next
    }

    //if user is not authenticated
    return res.redirect('/');

}

//set the views for user
passport.setAuthenticatedUser = function(req,res,next){
    if(req.isAuthenticated){
        //req.user contains the current signed in user from the session cookie and we are just sending this to the locals for the views
        res.locals.user = req.user;
    }
    next();
}


module.exports = passport;