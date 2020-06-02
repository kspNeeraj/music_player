const express= require('express');

//setting up the router method fot routing
const router= express.Router();
//importng homecontroller
const homeController = require('../controllers/home_controller');

router.get('/',homeController.home);
//routing to musicplayer
router.use('/',require('./musicplayer'));
//routing to user signup
router.use('/',homeController.sign_up);

//router.post('/create',homeController.create);

module.exports=router;