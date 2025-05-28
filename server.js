import app from "./app.js";
import dotenv from 'dotenv'
import connectDb from "./src/config/db.js";


dotenv.config()
connectDb()

const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log(`server is running in the port ${PORT}`)
})