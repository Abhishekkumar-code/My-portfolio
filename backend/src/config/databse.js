const mongoose = require("mongoose")

function connecttodb(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("mongodb connect ho gaya bhai log ");
        
    })
}

module.exports= connecttodb