//importing epress
const express= require('express');

//setting up the router method fot routing
const router= express.Router();
//importng homecontroller
const userController = require('../controllers/usercontroller');

//routing to verifyEmail
router.get('/verifyEmail',userController.verifyemail);
//routing to sign up
router.post('/sign_up',userController.sendmail);
//routing to create user 
router.post('/create',userController.create);


module.exports=router;