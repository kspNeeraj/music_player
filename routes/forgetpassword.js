const express= require('express');

//setting up the router method fot routing
const router= express.Router();
//importng homecontroller
const forgetController = require('../controllers/forgetpassword_Controller');


router.get('/forgetpassword',forgetController.renderForget);

router.post('/resetpassword',forgetController.sendmail);

router.post('/',forgetController.change);


module.exports=router;