import { Request, Response } from 'express';
import slugify from 'slugify';
import {myModel} from '../models/blogModel';
import {v4 as uuidv4} from 'uuid';

export async function create(req: Request, res: Response){
    let {title,content,author} = req.body;
    let slug = slugify(title);
    console.log(author);

    if (!slug){
        slug =  uuidv4();
    }

    switch (true){
        case !title || '':
            return res.status(400).json({message:"กรุณากรอกข้อมูล"})
            break;
        case !content || '':
            return res.status(400).json({message:"กรุณาป้อนเนื้อหาบทความ"})
            break;
        case author == "":
            author = "Anonymous";
            break;
    }
        try {
            const blog = await myModel.create({title,content,author,slug}) // create collection name " mymodels " to mongodb 
            console.log('Document created successfully:',blog);
            res.json(blog)
        } catch (err:any) {
                res.status(400).json({message:"ข้อมูลซ้ำ"});
        }
    
    // myModel.create({title,content,author,slug}).then((data) => {
    //     res.json(data);
    // }).catch((error) => {res.status(400).json(error.message)})

};

export const getBlogs = async (req:Request,res:Response) => {
    try{
        const allBlog = await myModel.find({}).exec();
        console.log(allBlog);
        res.json(allBlog);
    }catch(error:any) {
        res.status(400).json(error.message)
    }

}

export const getSingleBlogs = async (req:Request, res:Response) => {
    try{
        const {slug} = req.params
        const singleBlog = await myModel.findOne({slug}).exec();
        console.log('singleBlog'+ singleBlog);
        res.json(singleBlog);
    }catch(error:any) {
        res.status(400).json(error.message)
    }
}

export const remove = async (req:Request, res:Response) => {
    try{
        const {slug} = req.params
        const removeBlog = await myModel.findOneAndRemove({slug}).exec();
        console.log('removeBlog'+ removeBlog);
        if(removeBlog){
            res.json({
                message: "successfully removed"
            }) 
        }else{
            res.json({message: "no blog found"})
        }
    }catch(error:any) {
        res.status(400).json(error.message)
    }
};