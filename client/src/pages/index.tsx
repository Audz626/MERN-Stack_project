import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Systembar from "../components/systembar";
import { getBlogs } from "../services/api";
import { UpSquareOutlined } from "@ant-design/icons";
import {Button} from 'antd'
import { Link } from "react-router-dom";
import "../App.css";

interface Blog {
  title: string;
  content: string;
  author: string;
  slug: string;
}

const Index: React.FC = () => {
  const [blogs, setBlogs] = useState<Array<Blog>>([]);
  

  useEffect(() => {
    getBlogs().then((data) => {
      setBlogs(data.data);
    });
  }, []);

  useEffect(() => {
    const btn:any = document.getElementById("back-to-top");
    const scrollHandler = () => {
      if (document.documentElement.scrollTop > window.innerHeight * 0.8) {
        btn.classList.add("visible");
      } else {
        btn.classList.remove("visible");
      }
    };
  
    btn.addEventListener("click", () => {
      const scrollStep = -window.scrollY / (2000 / 15); // set to to back to top for smoothy (fixed this line.)
      const scrollInterval = setInterval(() => {
        if (window.scrollY !== 0) {
          window.scrollBy(0, scrollStep);
        } else {
          clearInterval(scrollInterval);
        }
      }, 15);
    });
  
    window.addEventListener("scroll", scrollHandler);
  
    return () => {
      window.removeEventListener("scroll", scrollHandler);
      btn.removeEventListener("click", () => {
        const scrollStep = 0;
        const scrollInterval = setInterval(() => {
          if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
          } else {
            clearInterval(scrollInterval);
          }
        }, 15);
      });
    };
  }, []);
  
  return (
    <>
      <div className="w-full">
      <Systembar/>
        <Navbar />
        <div className="fixed bottom-4 right-4 z-50 hidden  !z-index-[30]">
          <Button className="!w-[50px] h-[50px] fixed bottom-5 right-5"  id="back-to-top" shape="circle" icon={<UpSquareOutlined />}></Button>
        </div>

        {/* <svg className="sticky top-10 z-[-99]" viewBox="0 0 500 100">
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
        </svg> */}

        <div className="pt-5 pb-5 px-[30rem] grid grid-cols-3 gap-4">
          {blogs.map((blog, index) => (
            <div
              className=" bg-white rounded-[1rem] shadow-lg"
              key={index}
            >
              <div className="">
                <div className="overflow-hidden rounded-t-[1rem] aspect-w-1 aspect-h-1">
                  <img
                    className="max-w-full max-h-full object-fill cursor-pointer rounded-t-[1rem] transition-transform !duration-500 ease-in-out hover:scale-110 aspect-w-1 aspect-h-1"
                    // className="w-[100%] object-contain hover:scale-110 duration-300 transition-transform ease-in-out"
                    src="src/assets/hummingbird.jpg"
                    alt="test"
                  />
                </div>
                <div className="font-bold text-xl my-4 mx-4 cursor-pointer">{blog.title}</div>
                <div className="overflow-hidden px-5">
                  <p className="text-gray-700 text-base truncate overflow-ellipsis">
                    {blog.content}
                  </p>
                </div>
              </div>
              <div className="px-6 pt-4 pb-2">
                <Link
                  to={`/blog/${blog.slug}`}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-300"
                >
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

export default () => <Index />;
