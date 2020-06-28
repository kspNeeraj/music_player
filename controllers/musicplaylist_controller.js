//importing musicplaylist schema
const musicplaylist = require('../models/musicplaylist');

//creating and exporting  toggleAddtoPlaylist function
module.exports.toggleAddtoPlaylist = async function(req,res){
    try {
        let deleted=false;
        //finding  song in musicplaylist
        musicplaylist.findOne({
            name:req.query.name,
            id:req.query.id,
            onclic:req.query.onclic,
            source:req.query.source,
            user:req.user._id
        },function(err,playlistSong){
            if(err){console.log(err,'error in finding');}
            //if song is found that means it is already in playlist  and has to delete
            if(playlistSong){
              
                
                console.log("removed from playlist");
                playlistSong.remove();
                deleted=true;
                if(req.xhr){
                    
                    
                    return res.status(200).json({
                    
                        message: "request successfull",
                        data: {
                            deleted:deleted,
                            newSong:playlistSong
                        }
                    });
                }
            }
            //if song is not found then create it 
            else{
               let fav= musicplaylist.create({
                    name:req.query.name,
                    id:req.query.id,
                    onclic:req.query.onclic,
                    source:req.query.source,
                    user:req.user._id
                },function(err,playlistSong){
                    if(err){console.log(err,'error in finding');}
                 
                    if(req.xhr){
                        // if we want to populate just the name of the user (we'll not want to send the password in the API), this is how we do it!
                        console.log("addeed to playlist");
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