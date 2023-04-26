import axios from "axios";
const API_URL = import.meta.env.VITE_API;
interface MyData{
    title: string;
    content: string;
    author: string;
}
export const Create = (data:MyData) =>{
return axios
    .post(`${API_URL}/api/create`, data)
    .then((res) => {
        return true;
    })
    .catch((err) => {
        return err.response.data.message;
    })
    };

export const getBlogs = () =>{
    return axios
    .get(`${API_URL}/api/blogs`)
    .then(res => {
        return res;
    })
    .catch((err) => {
        return err.data;
    })
}

export const getBlogsBySlug = (data : any) =>{
    return axios
    .get(`${API_URL}/api/blog/${data}`)
    .then(res => {
        return res;
    })
    .catch((err) => {
        return err.data;
    })
}
