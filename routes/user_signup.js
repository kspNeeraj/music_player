const express= require('express');

//setting up the router method fot routing
const router= express.Router();
//importng homecontroller
const userController = require('../controllers/usercontroller');

router.get('/sign_up',userController.sign_up);

router.post('/create',userController.create);


module.exports=router;