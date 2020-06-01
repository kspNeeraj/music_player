

//exporting the home page function to render views
module.exports.home =  function(req,res){
    console.log("home page is rendering");
    return res.render('home',{
        title:"musicplayer",

    })
    
}