import mongoose from 'mongoose'
import config from '../config/index.js'


const dbconnect = ( async()=>{
   try{
    await mongoose.connect(config.MONGO_URL,{
        family:4
    });
    console.log("Database connected!");
   }catch(error){
    console.error(error);
    console.log("Something went wrong at database level")
    throw error;
    // process.exit(1) // exit from mongodb
   }
})()

export default dbconnect

