import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import { response } from './models/response.models.js';

dotenv.config()
const app = express()
const port = 3000
app.use(cors(
    {
        origin: "*",
        methods: "GET, POST, PUT, DELETE",
        allowedHeaders: ["Content-Type", "Authorization"],
    }
  
))
app.use(express.json())

const dbconn=async()=>{
    try {
        const conn=await mongoose.connect(`mongodb+srv://chandanramgar:${process.env.MONGODB_PASS}@cluster0.iq0ed.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
        console.log("MongoDB connection Successfully",conn.connection.host)
    
    } catch (error) {
        console.error("Failed : ",error)
    }
}

dbconn()



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/api/contact',(req,res)=>{
    const {Name,
        email,
        Message,}=req.body
    // console.log(req.body)
    response.create({Name,Email:email,message:Message})
    .then((response)=>{
        // res.status(201).json({message:"Message sent successfully"})
        res.json("Message sent successfully")

    })
    .catch((error)=>{
        // res.status(500).json({error:"Failed to send message"})
        res.json("Server Error ERROR:500")
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})