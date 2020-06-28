const express= require('express');

//setting up the router method fot routing
const router= express.Router();

//getting controller
const favArtistController = require('../controllers/favArtist_controller');
//routing to toogleartist
router.get('/toggleArtist',favArtistController.togglefavartist);

module.exports=router