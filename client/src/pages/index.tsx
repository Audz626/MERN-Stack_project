import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Systembar from "../components/systembar";
import Footer from "../components/footer";
import { getBlogs } from "../services/api";
import { UpSquareOutlined } from "@ant-design/icons";
import { Button, Pagination } from "antd";
import { Link } from "react-router-dom";
import "../App.css";
import "../assets/style/pagination.css"

interface Blog {
  title: string;
  content: string;
  author: string;
  slug: string;
}

const Index: React.FC = () => {
  const [blogs, setBlogs] = useState<Array<Blog>>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(12);

  useEffect(() => {
    getBlogs().then((data) => {
      setBlogs(data.data);
    });
  }, []);

  const handlePageChange = (page: number, pageSize?: number) => {
    console.log("page", page);
    console.log("pageSize", pageSize);
    setCurrentPage(page);
    if (pageSize) {
      setPageSize(pageSize);
    }
  };

  const paginatedBlogs = blogs.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  useEffect(() => {
    const btn: any = document.getElementById("back-to-top");
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
        <Systembar />
        <Navbar />
        <div className="fixed bottom-4 right-4 z-50 hidden  !z-index-[30]">
          <Button
            className="!w-[50px] h-[50px] fixed bottom-5 right-5"
            id="back-to-top"
            shape="circle"
            icon={<UpSquareOutlined />}
          ></Button>
        </div>

        <div className="pt-5 pb-5 px-[20rem] grid grid-cols-3 gap-4">
          {paginatedBlogs.map((blog, index) => (
            <div className=" bg-white rounded-[1rem] shadow-lg" key={index}>
              <div className="">
                <div className="overflow-hidden rounded-t-[1rem] aspect-w-1 aspect-h-1">
                  <img
                    className="max-w-full max-h-full object-fill cursor-pointer rounded-t-[1rem] transition-transform !duration-500 ease-in-out hover:scale-110 aspect-w-1 aspect-h-1"
                    // className="w-[100%] object-contain hover:scale-110 duration-300 transition-transform ease-in-out"
                    src="src/assets/hummingbird.jpg"
                    alt="test"
                  />
                </div>
                <div className="font-bold text-xl my-4 mx-4 cursor-pointer">
                  {blog.title}
                </div>
                <div className="overflow-hidden px-5">
                  <p className="text-gray-700 text-base truncate overflow-ellipsis">
                    {blog.content}
                  </p>
                </div>
              </div>
              <div className="px-6 pt-4 pb-2 ">
                <Link
                  to={`/blog/${blog.slug}`}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 no-underline transition-transform duration-300 ease-in-out
                  hover:bg-[#565c39]
                  hover:text-white
                  hover:-translate-y-1 "
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="p-5">
            {blogs.length > 0 ? (
              <Pagination
                className="mr-5 text-end"
                total={blogs?.length}
                showTotal={(total, range) =>
                  `${range[0]}-${range[1]} of ${total} items `
                }
                defaultPageSize={pageSize}
                defaultCurrent={currentPage}
                onChange={(page, size) => {
                  handlePageChange(page, size);
                }}
              />
            ) : (
              <p>No items to display.</p>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default () => <Index />;
