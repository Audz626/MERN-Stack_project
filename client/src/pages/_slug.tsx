import { title } from 'process';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getBlogsBySlug } from '../services/api';
import moment from 'moment';
import Navbar from '../components/navbar';

interface Blog {
    title : string;
    content : string;
    author : string;
    slug : string;
    createdAt : [string];
    updatedAt : [string];
    _id : string;
}

const _slug: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  console.log(slug);
  const [blog, setBlog] = useState<Blog>()

  // const time = moment();

  useEffect(() => {
    getBlogsBySlug(slug).then((data) => {
      setBlog(data.data);
      console.log(data.data);
    });
  }, []);
  return (
    <div>
      <Navbar/>
      <div className='m-20 p-10 w-[60] h-[100] bg-white rounded-xl'>
        {/* {blog?._id}<br/> */}
        <h1>{blog?.title}</h1>
        {/* <br /> */}
        {blog?.content}
        <p className='text-sky-400'>ผู้เขียน : {blog?.author} , เผยแพร่ : {moment(blog?.createdAt).format("DD/MM/YYYY")}</p>
      </div>

    </div>
  );
};

export default _slug;
