// ออกแบบ โครงสร้างในการจัดเก็บข้อมูล
import mongoose,{Schema} from "mongoose";

 const blogSchema:Schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content:{
        type:{},
        required: true
    },
    author:{
        type:String,
        default:"Admin"
    },
    slug:{
        type:String,
        lowercase:true,
        unique: true
    },
    urlpath:{
        type:String,
    }
},{timestamps:true});

export const myModel = mongoose.model('MyModel', blogSchema);
