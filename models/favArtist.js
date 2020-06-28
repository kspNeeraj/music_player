//importing mongoose database
const mongoose = require('mongoose');
//creating favartist schema
const favArtistSchema = new  mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    likes_count: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Trending'
    }],
  
}, {
    timestamps:true
});

const favArtist = mongoose.model('favArtist',favArtistSchema);

module.exports = favArtist;

