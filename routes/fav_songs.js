const express= require('express');

//setting up the router method fot routing
const router= express.Router();

//getting controller
const favsongcontroller = require('../controllers/favSong_controller');

router.get('/togglefavsong',favsongcontroller.togglefavSong);

module.exports=router