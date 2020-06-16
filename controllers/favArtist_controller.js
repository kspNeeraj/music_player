
const favArtist = require('../models/favArtist');
const User= require('../models/user');
module.exports.togglefavartist = async function(req,res){
    try {

        //link/toggle/?id=abcef&type==post
         // likes/toggle/?id=abcdef&type=Post
        let deleted=false;
//        let favorite= User.findById(req.query.id).populate('favartist');
        //check if fav artist is already existed
        let existingFavArist = favArtist.findOne({
            name:req.query.name,
            image:req.query.image,
            user:req.user._id
        },function(err,artist){
            if(err){console.log(err,'not found');}
            if(artist){
                req.flash('success',"removed from fav artist");
                console.log(artist);
                artist.remove();
                console.log('removed');
                req.flash('success',"removed from fav artist");
                return res.redirect('/musicplayer'); 
            }
            else{
                favArtist.create({
                        name:req.query.name,                      
                        image:req.query.image,
                        user:req.user._id
                    });

//            favorite.push(newFavArtist._id);
            req.flash('success',"Added to your favArtist");
     //   }
            return res.redirect('/musicplayer'); 
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
        console.log();
        return res.json(500,{
            message: "Internal server Error"
        });
    }

}