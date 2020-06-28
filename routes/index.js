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
//routing to sign out
router.use('/',require('./sign_out'));

//routong to fav artist
router.use('/',require('./fav_Artist'));

//routing to fav song
router.use('/',require('./fav_songs'));
//routing to music playlist
router.use('/',require('./music_playlist'));


//routing to flash 
router.route('/')
.get(function(req, res, next) {
    req.flash('flash', 'test flash!');
    res.redirect(303, '/flash');
});

router.route('/flash')
.get(function(req, res, next) {
    console.log(req.flash('flash'));
    res.send('ok');
});


module.exports=router;