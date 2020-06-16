//getting User from mongoose
const User = require('../config/mongoose');
const allusers = require('../models/user');
const favArtist= require('../models/favArtist');
const favSong = require('../models/favSong');

//exporting the home page function to render views
module.exports.home = async function(req,res){
    try {
        
        console.log("home page is rendering");
        return res.render('home',{
        title:"home",
       
    });
    } catch(err){
        console.log('Error',err);
        return;
    }
    
    
}


module.exports.musicplayer =async function(req,res){
    try {
        let allfavSong
        let favsong = favSong.find({}).populate().exec(function(err,allfavsong){
            if(err){console.log(err);}
            else{
                allfavSong=allfavsong;
                
            }
        });
       
        let favartist = favArtist.find({})
        .populate().exec(function(err,user){
            if(err){
                console.log(err);
                return;
            }
            else{
  //              console.log(user);
      //          console.log(allfavSong);
                return res.render('musicplayer',{
                    title:"musicplayer",
                    favartists: user,
                    allfavsong:allfavSong
               //     user: users
           
                });
            }
        });
       

        
        // let users = allusers.find({});

         console.log("music player loaded");
     
         
    } catch(err){
        console.log('Error',err);
        return;
    }
    
}

//sign in and create a session for the user
module.exports.CreateSession = function(req,res){
    req.flash('success',"sign in successfuly");
    return res.redirect('/musicplayer');
}

module.exports.deleteSession = function(req,res){
    //logout function given to request by passport
    req.logout();
    req.flash('success',"sign out successfuly");
    return res.redirect('/');
}





