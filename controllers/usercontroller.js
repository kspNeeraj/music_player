const db= require('../config/mongoose');
const User =require('../models/user');

module.exports.create=  function(req,res){
    //  console.log('datacreation');
      if(req.body.password != req.body.confirm_password){
              console.log('password didnt match');
              return res.redirect('back');
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

module.exports.sign_up = function(req,res){
    console.log("sign up loaded");
    return res.render('user_sign_up',{
        title:"signup",
    })
}