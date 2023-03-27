import axios from "axios";
const API_URL = import.meta.env.VITE_API;
interface MyData{
    title: string;
    content: string;
    author: string;
}
export const getCreate = (data:MyData) =>{
return axios
    .post(`${API_URL}/create`, data)
    .then((res) => {
        return true;
    })
    .catch((err) => {
        return err.response.data.message;
    })
    };
