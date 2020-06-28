//getting User schema from mongoose
const User = require('../config/mongoose');
const allusers = require('../models/user');
//importing favArtis schema
const favArtist= require('../models/favArtist');
//importing fasong schema
const favSong = require('../models/favSong');
//importing MusicPlaylist schema 
const MusicPlaylist = require('../models/musicplaylist');

//exporting the home page function to render views
module.exports.home = async function(req,res){
    try {
        //if req is authenticated redirevt to music player
        if (req.isAuthenticated()){
            return res.redirect('/musicplayer');
        }
        
        console.log("home page is rendering");
        return res.render('home',{
        title:"home",
       
    });
    } catch(err){
        console.log('Error',err);
        return;
    }
    
    
}

//populating over allfav song and sending schema to front end
let allfavSong;
let favsong = favSong.find({}).populate().exec(  function(err,allfavsong){
    if(err){
        console.log(err);
        return;
    }
    else{
        allfavSong=allfavsong;
    }
});
//populating over allplaylist schema 
let allplaylistsong;
let playlistsong = favSong.find({}).populate().exec(  function(err,allplaylistSong){
    if(err){
        console.log(err);
        return;
    }
    else{
        allplaylistsong=allplaylistSong;
    }
});
//populating over favartist schema 
let user;
let favartist =  favArtist.find({})
        .populate().exec( function(err,users){
            if(err){
                console.log(err);
                return;
            }
            else{
  //              console.log(user);
      //          console.log(allfavSong);
 //               console.log(allplaylistsong);
                   user = users
                  
            }
 });
   
//exporting the music player page function to render views
module.exports.musicplayer =async function(req,res){
    try {
       
       
       
        

        return res.render('musicplayer',{
            title:"musicplayer",
            //sending schemas to front end
            favartists: user,
            allfavsong:allfavSong,
            allplaylistSong:allplaylistsong
            
       //     user: users
   
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





