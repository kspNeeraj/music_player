const express= require('express');

//setting up the router method fot routing
const router= express.Router();
//importng homecontroller
const homeController = require('../controllers/home_controller');
const passport= require('passport');

router.get('/',homeController.home);
//routing to musicplayer

router.use('/',require('./musicplayer'));

//routing to user signup
router.use('/',require('./forgetpassword'));

//routing to user signup
router.use('/',require('./user_signup'));

router.use('/',require('./sign_out'));

//routong to fav artist
router.use('/',require('./fav_Artist'));

router.use('/',require('./fav_songs'));

router.use('/',require('./music_playlist'));
module.exports=router;