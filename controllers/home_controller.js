//getting User from mongoose
const User = require('../config/mongoose');

//exporting the home page function to render views
module.exports.home = async function(req,res){
    console.log("home page is rendering");
    return res.render('home',{
        title:"home",

    })
    
}

module.exports.musicplayer = async function(req,res){
    console.log("music player loaded");
    return res.render('musicplayer',{
        title:"musicplayer",
    })
}

module.exports.sign_up = async function(req,res){
    console.log("sign up loaded");
    return res.render('user_sign_up',{
        title:"signup",
    })
}

// module.exports.create= async function(req,res){
//   //  console.log('datacreation');
//     if(req.body.password != req.body.confirm_password){
//             console.log('password didnt match');
//             return res.redirect('back');
//     }

//     User.findOne({email : req.body.email},function(err,user){
//         if(err){
//             console.log('finding error');
//             return;
//         }
//         if(!user){
//                 User.create(req.body,function(err,user){
//                     if(err){console.log('error');return;}

//                     return res.redirect('back');
//                 })
//         }
//         else{
//             console.log('error in creating');
//             return res.redirect('back');
//         }
//     });
//}

