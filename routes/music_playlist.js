const express= require('express');

//setting up the router method fot routing
const router= express.Router();

//getting controller
const musicController = require('../controllers/musicplaylist_controller');

//routing to toggleAddtoplaylist
router.get('/toggleAddtoplaylist',musicController.toggleAddtoPlaylist);

module.exports=router