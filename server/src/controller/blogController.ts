import { NextFunction, Request, Response } from 'express';
import path  from 'path';
import slugify from 'slugify';
import {myModel} from '../models/blogModel';
import {v4 as uuidv4} from 'uuid';
import formidable from 'formidable';
import * as fs from "fs-extra";
import dotenv from 'dotenv'
dotenv.config();

const imgpath = process.env.ROOT_PATH_MERN?process.env.ROOT_PATH_MERN:__dirname;
// const path = process.env.PATH_ROOT;
console.log(imgpath);
// console.log(path);

export async function create(req: Request, res: Response, next: NextFunction){
    const form = new formidable.IncomingForm();
    form.parse(req,async (err:any, fields:any, files:any) => {
        if (files.urlpath) {console.log('1')}else{console.log('0')}
        let {title,content,author} = fields;
        let slug = typeof title === 'string' ? slugify(title) : '';
        let urlpath = '';
        console.log('fields',fields);
        console.log('files',files);
        
        if(err){
            res.status(500).json({ message: "Failed to upload image" });
            return;
        }

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

        if (files.urlpath) {
            const file:any = Array.isArray(files.urlpath) ? files.urlpath[0] : files.urlpath;
            console.log('file',file)
            urlpath = `/uploaded/images/${file.newFilename}`;
            file.path = imgpath + urlpath;
            // console.log('file,path',file.path)

            const imagePath = path.join(imgpath, 'uploaded/images/', file.originalFilename);
            try {
                await fs.copy(file.path, imagePath);
                await fs.remove(file.path);
            } catch (error) {
                console.error(error);
                res.status(500).json({ message: 'Failed to save image' });
                return;
            }
            
                }

            try {
                const blog = await myModel.create({title,content,author,urlpath,slug})
                // console.log('Document created successfully:',blog);
                res.json(blog)
            } catch (err:any) {
                    res.status(400).json({message:"ข้อมูลซ้ำ"});
            }
    })
    
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

function async(err: any, fields: any, files: any): ((err: any, fields: formidable.Fields, files: formidable.Files) => void) | undefined {
    throw new Error('Function not implemented.');
}
