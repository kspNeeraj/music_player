const express= require('express');

//setting up the router method fot routing
const router= express.Router();
const homeController = require('../controllers/home_controller');

router.get('/',homeController.home);

module.exports=router;