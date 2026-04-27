require("dotenv").config()
const app = require("./src/app")
const connectotdb=require("./src/config/databse")

connectotdb()
app.listen(3000,()=>{
    console.log("server is running on 3000");
    
})