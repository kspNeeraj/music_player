//importing database
const db= require('../config/mongoose');
//importing user schema
const User =require('../models/user');
//importing mailers
const sendmail = require('../mailers/verify_emil');

var text;

//creating and exporting verify email0   function and "verify email
module.exports.verifyemail = function(req,res){
    if (req.isAuthenticated()){
        return res.redirect('/musicplayer');
    }
    console.log("verify page loaded");
    req.flash('success'," address sended to mail");
    return res.render('verify_email',{
        title:"verify email",
    })
}

//creating and exporting sendmail  function and rendering to verifyemail
module.exports.sendmail = function(req,res){
    try {
        
        text = sendmail.verifyemail(req.body.email);
        
        console.log(text);
        return res.render('user_sign_up',{
        title:"signup",
        email:req.body.email
       
    });
    } catch(err){
        console.log('Error',err);
        return;
    }
}

//creating and exporting create  function and rendering to home afer create
module.exports.create=  function(req,res){
    //  console.log('datacreation');
      if(text != req.body.verify_address){
        console.log('wrong verify address');
        req.flash('success',"wrong token send again address  ");
        //handling post request
        return res.redirect('http://localhost:8000/verifyEmail');
      }
      if(req.body.password != req.body.confirm_password){
              console.log('password didnt match');
              req.flash('success',"wrong token send again address ");
              //handling post request
              return res.redirect('http://localhost:8000/verifyEmail');
      }
  
      User.findOne({email : req.body.email},function(err,user){
          if(err){
              console.log('finding error');
              return;
          }
          if(!user){
                  User.create(req.body,function(err,user){
                      if(err){console.log('error');return;}
                      console.log(user);
                      return res.redirect('/');
                  })
          }
          else{
              console.log('error in creating');
              return res.redirect('back');
          }
      });
}

// module.exports.create = function(req,res){
//     User.create({
//         name:req.body.name,
//         password:req.body.password,
//         email:req.body.email
//     },function(err,user){
//         if(err){
//             console.log(`error in wiritng : ${err} `);
//             return;
//         }
//         console.log('db created',user);
//         return res.redirect('back');
//     });
// }

// module.exports.sign_up = function(req,res){
//     console.log("sign up loaded");
//     return res.render('user_sign_up',{
//         title:"signup",
//     })
// }



