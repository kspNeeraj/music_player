//getting User from mongoose
const User = require('../config/mongoose');

//exporting the home page function to render views
module.exports.home = async function(req,res){
    console.log("home page is rendering");
    return res.render('home',{
        title:"home",

    })
    
}


module.exports.musicplayer = function(req,res){
    console.log("music player loaded");
    return res.render('musicplayer',{
        title:"musicplayer",
    })
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





