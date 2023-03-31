import { title } from 'process';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getBlogsBySlug } from '../services/api';

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
       {blog?._id}<br/>
       {blog?.createdAt}
    </div>
  );
};

export default _slug;
