const express= require('express');
//importing touter method of express
const router= express.Router();

//importing passport
const passport = require('passport');

//getting homecontroller to use its functions
const homeController = require('../controllers/home_controller');
const { Passport } = require('passport');

//routing to music player 
router.get('/musicplayer',homeController.musicplayer);

//routing to music player if user request to reset password from musicplayer page
router.get('/resetpassword',function(req,res){
    return res.redirect('/musicplayer');
});
//routing to music player if user request to reset sign up from musicplayer page
router.get('/sign_up',function(req,res){
    return res.redirect('/musicplayer');
});


//getting musicplayer function of homecontroller // use passport middleware to authenticate
router.post('/musicplayer',passport.authenticate(
    'local',
    { failureRedirect: 'back' }
),homeController.CreateSession);



//get information from google
router.get('/auth/google',passport.authenticate('google',{scope:['profile','email']}));

router.get('/auth/google/callback',passport.authenticate('google',{failureRedirect:'back'}), homeController.CreateSession);



module.exports= router;