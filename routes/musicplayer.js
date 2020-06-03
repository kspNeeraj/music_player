const express= require('express');
//importing touter method of express
const router= express.Router();

//importing passport
const passport = require('passport');

//getting homecontroller to use its functions
const homeController = require('../controllers/home_controller');

router.get('/musicplayer',homeController.musicplayer);

//getting musicplayer function of homecontroller // use passport middleware to authenticate
router.post('/musicplayer',passport.authenticate(
    'local',
    { failureRedirect: 'back' }
),homeController.CreateSession);

router.get('/sign-out',homeController.deleteSession);

module.exports= router;