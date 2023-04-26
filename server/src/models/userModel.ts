import mongoose,{Schema} from "mongoose";
const usersSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
},{timestamps:true});

export const usersModel = mongoose.model('users',usersSchema)