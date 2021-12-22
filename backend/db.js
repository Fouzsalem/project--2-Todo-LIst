const mongoose=require('mongoose')

const dbURI='mongodb://localhost:27017'


mongoose.connect(dbURI)



const db=mongoose.connection


db.on('error',(err)=>{
   console.log("EROR in MongoDB")


})


db.on('conncted',(err)=>{
    console.log( "MongoDB is CONNECTED ...")
 
 
 })