const sendmail = require('../mailers/forget_passord_mailer');
const User = require('../models/user');
const crypto = require('crypto');
const { Console } = require('console');
const router = require('../routes/musicplayer');
var text;

module.exports.renderForget = function(req,res){
    try {
             
        return res.render('forget_passord',{
        title:"foget_passord",
       
    });
    } catch(err){
        console.log('Error',err);
        return;
    }
}

module.exports.sendmail = function(req,res){
    try {
        req.flash('success',"high security password ended to mail");
        text = sendmail.forget_password(req.body.email);
        console.log(text);
        return res.render('resetpassword',{
        title:"reset password",
       
    });
    } catch(err){
        console.log('Error',err);
        return;
    }
}

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


