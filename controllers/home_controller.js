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



