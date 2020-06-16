//importing favsong
const favSongs = require('../models/favSong');

module.exports.togglefavSong = async function(req,res){
    try {
        favSongs.findOne({
            name:req.query.name,
            id:req.query.id,
            onclic:req.query.onclic,
            source:req.query.source,
            user:req.user._id
        },function(err,favsong){
            if(err){console.log(err,'error in finding');}
            if(favsong){
                req.flash('success',"remove from the favorite song");
                console.log(favsong);
                console.log("removed");
                favsong.remove();
                return res.redirect('/musicplayer');
            }
            else{
               let fav= favSongs.create({
                    name:req.query.name,
                    id:req.query.id,
                    onclic:req.query.onclic,
                    source:req.query.source,
                    user:req.user._id
                });
                console.log(fav);
                req.flash('success',"added to your fav song");
                return res.redirect('/musicplayer');
            }
        });
        
    } catch (err) {
        console.log(err);
        return res.json(500,{
            message: "Internal server Error"
        });
    }
}