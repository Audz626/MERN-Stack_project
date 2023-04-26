import mongoose,{ConnectOptions, connect} from "mongoose";
import { MongoClient, MongoClientOptions } from 'mongodb';
import dotenv from "dotenv";
dotenv.config();

// const db:any = process.env.DATABASE;

// mongoose.connect(db,{
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
// });

// const db_con = mongoose.connection;

const db_con:any = process.env.DATABASE;
const db_bio_con:any = process.env.BIO_BLOG_DB;

const connectDB = async () => {
    try {
        await mongoose.connect(db_bio_con);
        console.log("Connected to MongoDB"); 
    } catch (error) {
        console.log("Error", error);
    }
};

export default connectDB;