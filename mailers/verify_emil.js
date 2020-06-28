const nodemailer = require('../config/nodemailer');
const crypto = require('crypto');
const { Console } = require('console');
// this is the another way of exporting method using arrows
exports.verifyemail = (email) => {
    
    let text=crypto.randomBytes(25).toString('hex');
    console.log(text);
    //send mail is predefined function which take arguments
    nodemailer.transporter.sendMail({
        from: "musicplayer",
        to: email,
        subject: " verify password:",
        html:`<h1> copy this address and paste it into verify address column <h2> ${text} </h2>  </h1>  `
    },(err, info) => {
        //call back function
        if(err){
            console.log('error in sending message',err);
            return
        }

        console.log('message delivered' , info);
        return text;
    });
    return text;
}