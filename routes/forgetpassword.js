const express= require('express');

//setting up the router method fot routing
const router= express.Router();
//importng homecontroller
const forgetController = require('../controllers/forgetpassword_Controller');

//routing to forget password
router.get('/forgetpassword',forgetController.renderForget);
//routing to resetpassword
router.post('/resetpassword',forgetController.sendmail);
//routing to home after password change 
router.post('/',forgetController.change);


module.exports=router;