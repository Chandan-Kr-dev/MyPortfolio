import mongoose from "mongoose";

const responseSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
},{timestamps:true})

export const response=new mongoose.model('response',responseSchema)