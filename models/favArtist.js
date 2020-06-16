//creating mongoose database
const mongoose = require('mongoose');

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
    }
}, {
    timestamps:true
});

const favArtist = mongoose.model('favArtist',favArtistSchema);

module.exports = favArtist;