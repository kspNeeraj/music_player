
const favArtist = require('../models/favArtist');
const User= require('../models/user');
const newLocal = false;
module.exports.togglefavartist = async function(req,res){
    
    try {

        

        //link/toggle/?id=abcef&type==post
         // likes/toggle/?id=abcdef&type=Post
        let deleted=false;
        var mess="false";
        
//        let favorite= User.findById(req.query.id).populate('favartist');
        //check if fav artist is already existed
        let existingFavArist = favArtist.findOne({
            name:req.query.name,
            image:req.query.image,
            user:req.user._id
        },function(err,artist){
            if(err){console.log(err,'not found');}
            if(artist){
                deleted = true;
                
                
                artist.remove();       
                console.log('removed',deleted,mess);
                req.flash('success',"removed from fav artist");
                if(req.xhr){
                    // if we want to populate just the name of the user (we'll not want to send the password in the API), this is how we do it!
                    
                    return res.status(200).json({
                       
                        message: "request successfull",
                        data: {
                            deleted:deleted,
                            mess:mess,
                            newFavArtist:artist
                        }
                    });
                }
                
                 
            }
            else{
              let newFavArtist=  favArtist.create({
                        name:req.query.name,                      
                        image:req.query.image,
                        user:req.user._id
                    },function(err,artist){
                        if(err){console.log(err,'not found');}
                        req.flash('success',"Added to your favArtist");
     //   }
                        console.log("favartist added");
                        if(req.xhr){
                            // if we want to populate just the name of the user (we'll not want to send the password in the API), this is how we do it!
                            
                            return res.status(200).json({
                            
                                message: "request successfull",
                                data: {
                                    deleted:deleted,
                                    mess:mess,
                                    newFavArtist:artist
                                }
                            });
                        }

                    });

//            favorite.push(newFavArtist._id);
            
            }
            
        });

        
   //     console.log(existingFavArist);

        //if a fav arist already existed then delete it
//         if(existingFavArist){
//  //           favorite.favartist.pull(existingFavArist._id);
//   //           favorite.save();
//             existingFavArist.remove();
//             deleted=true;
//             req.flash('success',"removed from fav artist");
//         }
 //       else{
//             if(deleted){
//                 existingFavArist.remove();
//                 req.flash('success',"removed from fav artist");
//                 console.log('removed');
//                 deleted=false;
//                 return res.redirect('/musicplayer'); 

//             }
//             else{
//                 favArtist.create({
//                         name:req.query.name,
//                         image:req.query.image,
//                         user:req.user._id
//                     });

// //            favorite.push(newFavArtist._id);
//             req.flash('success',"Added to your favArtist");
//      //   }
//             return res.redirect('/musicplayer'); 
//             }
        // return res.json(200, {
        //     message: " request successfull",
        //     data: {
        //         deleted:deleted
        //     },
        
        // })
        

    } catch (err) {
        console.log(err);
        return res.json(500,{
            message: "Internal server Error"
        });
    }

}