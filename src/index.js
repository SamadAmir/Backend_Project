//require('dotenv').config({path:'./env'})
import connectDB from "./db/index.js";
import dotenv from "dotenv"
import express from "express"

dotenv.config()

const app = express()

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at ${process.env.PORT}`);
        
    })
})
.catch((err)=>{
    console.log("MONGODB Connection failed !!!",err);
    
})








//Connection with iffi an alternative method
// ( async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("ERR: ",error)
//             throw error
//         })

//         app.listen(process.env.PORT, ()=>{
//             console.log(`App is listening on ${process.env.PORT}`);
//         })

//     } catch (error) {
//         console.error("Error: ",error)
//         throw error
//     }
// })()

