import { title } from 'process';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getBlogsBySlug } from '../services/api';
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
        {blog?._id}<br/>
        {blog?.createdAt}
      </div>

    </div>
  );
};

export default _slug;
