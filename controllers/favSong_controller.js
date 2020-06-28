//importing favsong
const favSongs = require('../models/favSong');

//creating and exporting togglefavsong
module.exports.togglefavSong = async function(req,res){
    try {
        let deleted=false;
        favSongs.findOne({
            name:req.query.name,
            id:req.query.id,
            onclic:req.query.onclic,
            source:req.query.source,
            user:req.user._id
        },function(err,favsong){
            if(err){console.log(err,'error in finding');}
            if(favsong){
               
                //if song found delete it
                console.log("favsong removed");
                favsong.remove();
                deleted=true;
                if(req.xhr){

                    
                    return res.status(200).json({
                       
                        message: "request successfull",
                        data: {
                            deleted:deleted,
                            newFavSong:favsong
                        }
                    });
                }
                
            }
            //if song not found create it
            else{
               let fav= favSongs.create({
                    name:req.query.name,
                    id:req.query.id,
                    onclic:req.query.onclic,
                    source:req.query.source,
                    user:req.user._id
                },function(err,favsong){
                   
                    console.log("favsong added");
                    if(req.xhr){
                        // if we want to populate just the name of the user (we'll not want to send the password in the API), this is how we do it!
                        
                        return res.status(200).json({
                        
                            message: "request successfull",
                            data: {
                                deleted:deleted,
                                newFavSong:favsong
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