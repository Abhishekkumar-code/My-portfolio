const mongoose = require("mongoose")

const likeSchema = new mongoose.Schema({
  count: { type: Number, default: 0 }
})

const modelschema=mongoose.model('Like', likeSchema)

module.exports=modelschema