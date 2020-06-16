const passport = require('passport');
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const crypto = require('crypto');
const User = require('../models/user');

passport.use(new googleStrategy({
        clientID:'241728427879-t476asti2kjrpb4im7bu610ttf4g2dik.apps.googleusercontent.com',
        clientSecret:'1uHbiujeza4nn-2--haten_G',
        callbackURL:'http://localhost:8000/auth/google/callback'
    },
    // this accesstoken is similar to the jwt token whic expires after its stipulated time and then there is a refresh token if access token expire to get new access token
    function(accessToken , refreshToken , profile, done){
        
        User.findOne({email : profile.emails[0].value}).exec(function(err,user){
            if(err){console.log('error on google strategy passport',err); return;}
            console.log(accessToken,refreshToken);
            console.log(profile);
            //if user found or existed in db
            if(user){
                //if found then st this user as req.user
                return done(user,null);
            }
            //if user not found then create one
            else{
                User.create({
                    name:profile.displayName,
                    email:profile.emails[0].value,
                    //random bytes for random password 
                    password:crypto.randomBytes(20).toString("hex")
                },function(err,user){
                    if(err){console.log('eeror in creating user  google strategy passport ', err); return;}

                    return done(null , user);
                });
            }
        });
    }
    
    
    
));

