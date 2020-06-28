const mongoose = require('mongoose');
//creating trending schema
const trendingSchema = new mongoose.Schema({
    likes_count:{
        type:Number,
    }
    
},{
    timestamps:true
});

const Trending = mongoose.model('Trending',trendingSchema);

module.exports=Trending;