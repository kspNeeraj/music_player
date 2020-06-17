//importing favsong
const musicplaylist = require('../models/musicplaylist');


module.exports.toggleAddtoPlaylist = async function(req,res){
    try {
        musicplaylist.findOne({
            name:req.query.name,
            id:req.query.id,
            onclic:req.query.onclic,
            source:req.query.source,
            user:req.user._id
        },function(err,playlistSong){
            if(err){console.log(err,'error in finding');}
            if(playlistSong){
                req.flash('success',"removed from the playlist");
                console.log(playlistSong);
                console.log("removed");
                playlistSong.remove();
                return res.redirect('/musicplayer');
            }
            else{
               let fav= musicplaylist.create({
                    name:req.query.name,
                    id:req.query.id,
                    onclic:req.query.onclic,
                    source:req.query.source,
                    user:req.user._id
                });
                console.log(fav);
                req.flash('success',"added to your playlist");
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