import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import { getBlogs } from "../services/api";
import { Link } from "react-router-dom";
import "../App.css";

interface Blog {
  title: string;
  content: string;
  author: string;
  slug: string;
}

const Index: React.FC = () => {
  const [blogs, setBlogs] = useState<Array<Blog>>([])

  useEffect(() => {
    getBlogs().then((data) => {
      setBlogs(data.data);
    });
  }, []);

  return (
    <>
      <div className="w-full">
        <Navbar />

        <svg className="sticky top-10 z-[-99]" viewBox="0 0 500 100">
          <path
            d="M 0 20 C 150 150 300 0 500 50 L 500 0 L 0 0"
            fill="rgb(57, 27, 112)"
          ></path>
          <path
            d="M 0 20 C 150 150 330 -30 500 30 L 500 0 L 0 0"
            fill="#0E7452"
            opacity="0.8"
          ></path>
          <path
            d="M 0 20 C 215 150 250 0 500 80 L 500 0 L 0 0"
            fill="#0E7452"
            opacity="0.5"
          ></path>
        </svg>

        <div className="pt-5 pb-5 pl-5 pr-5 grid grid-cols-3 gap-4">
          {blogs.map((blog, index) => (
            <div className=" bg-white rounded-[1rem] overflow-hidden shadow-lg" key={index}>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{blog.title}</div>
                <div>
                  <p className="text-gray-700 text-base truncate">{blog.content}</p>
                </div>
              </div>
              <div className="px-6 pt-4 pb-2">
                <Link to={`/blog/${blog.slug}`} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-300">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default () => <Index/>;
