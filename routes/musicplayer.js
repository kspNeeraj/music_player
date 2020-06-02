const express= require('express');
//importing touter method of express
const router= express.Router();

//getting homecontroller to use its functions
const homeController = require('../controllers/home_controller');

//getting musicplayer function of homecontroller
router.post('/musicplayer',homeController.musicplayer);


module.exports= router;