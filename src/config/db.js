import mongoose from "mongoose"

async  function connectDb(){
    try{
        const connectionString = process.env.CONNECTION_STRING
        if(!connectionString){
            throw new Error(
                "connection string is undefined, check the environmental variables"
            )
        }
        await mongoose.connect(connectionString)
        console.log("successfuly connected to the DB")
    }
    catch(err){
        console.log(`error connecting database ${err}`)
    }
}


export default connectDb;