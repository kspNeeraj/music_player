//importing mailer for sending mail
const sendmail = require('../mailers/forget_passord_mailer');
//getting User schema 
const User = require('../models/user');
//importing crypto to create unique high security password 
const crypto = require('crypto');
const { Console } = require('console');
const router = require('../routes/musicplayer');
var text;


//creating and exporting renderForget  function and rendering view 
module.exports.renderForget = function(req,res){
    try {
        if (req.isAuthenticated()){
            return res.redirect('/musicplayer');
        }
        
        req.flash('success',"high security password sended to mail");
        return res.render('forget_passord',{
        title:"foget_passord",
       
    });
    } catch(err){
        console.log('Error',err);
        return;
    }
}

//creating and exporting sendmail  function and rendering to resetpassword
module.exports.sendmail = function(req,res){
    try {
        req.flash('success',"high security password sended to mail");
        text = sendmail.forget_password(req.body.email);
        console.log(text);
        return res.render('resetpassword',{
        title:"reset password",
        email:req.body.email
       
    });
    } catch(err){
        console.log('Error',err);
        return;
    }
}
//creating and exporting change passwords   function and rendering to home
module.exports.change = function(req,res){
    
        
        if(req.body.text != text){
            console.log('password didnt match');
            req.flash('success',"wrong token send again high security passord");
            return  res.redirect('http://localhost:8000/forgetpassword');
            // ('/resetpassword');
        }
        
            User.findOne({email : req.body.email},function(err,user){
                if(err){
                    console.log('finding error');
                    return;
                }
                
                if(user){
                    {
                        user.password = req.body.password,
                        user.save(function(err){
                            if(err){console.log(err);}
                            console.log('done');
                        });
                    }
                    console.log('password changed',user);
                    
                    req.flash('success',"password  changed");
                    return res.redirect('/')
                }
                else{
                    console.log('user not found',user);
                    return res.redirect('back');
                }
            });
        

      
     
}


