const express= require('express');
//importing touter method of express
const router= express.Router();

//getting homecontroller to use its functions
const homeController = require('../controllers/home_controller');

//for destroy the session and signout
router.get('/sign-out',homeController.deleteSession);


module.exports= router;