//importing favsong
const musicplaylist = require('../models/musicplaylist');


module.exports.toggleAddtoPlaylist = async function(req,res){
    try {
        let deleted=false;
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
                
                console.log("removed");
                playlistSong.remove();
                deleted=true;
                if(req.xhr){
                    // if we want to populate just the name of the user (we'll not want to send the password in the API), this is how we do it!
                    
                    return res.status(200).json({
                    
                        message: "request successfull",
                        data: {
                            deleted:deleted,
                            newSong:playlistSong
                        }
                    });
                }
            }
            else{
               let fav= musicplaylist.create({
                    name:req.query.name,
                    id:req.query.id,
                    onclic:req.query.onclic,
                    source:req.query.source,
                    user:req.user._id
                },function(err,playlistSong){
                    if(err){console.log(err,'error in finding');}
                    req.flash('success',"added to your playlist");
                    if(req.xhr){
                        // if we want to populate just the name of the user (we'll not want to send the password in the API), this is how we do it!
                        
                        return res.status(200).json({
                        
                            message: "request successfull",
                            data: {
                                deleted:deleted,
                                newSong:playlistSong
                            }
                        });
                    }
                });
                
            }
        });
        
    } catch (err) {
        console.log(err);
        return res.json(500,{
            message: "Internal server Error"
        });
    }
}