import React, { Component } from "react";
import Navbar from "../components/navbar";
import { getBlogs } from "../services/api";
import { Card, Col, Row } from "antd";
import { Link } from "react-router-dom";
import "../App.css";

interface State {
  blogs: Array<any>;
}

class Index extends Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      blogs: [],
    };
  }

  componentDidMount() {
    getBlogs().then((data) => {
      this.setState({ blogs: data.data });
      //   console.log(data);
    });
  }

  render() {
    const { blogs } = this.state;

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

          <div className="pt-5 pb-5">
            {blogs.map((blog, index) => (
              <div className="pl-72 pr-72 pb-3 z-[20]" key={index}>
                <Card
                  type="inner"
                  title={blog.title}
                  extra={<Link to={`/blog/${blog.slug}`}>More</Link>}
                >
                  <span>{blog.content}</span>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Index;
