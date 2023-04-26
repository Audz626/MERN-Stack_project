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
    urlpath:{
        type:String,
    },
    slug:{
        type:String,
        lowercase:true,
        unique: true
    },
    
},{timestamps:true});

export const blogspostModel = mongoose.model('blogspost', blogSchema);
