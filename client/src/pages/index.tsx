import React, { Component } from "react";
import Navbar from "../components/navbar";
import { getBlogs } from "../services/api";
import { Card, Col, Row } from "antd";
import {Link} from 'react-router-dom';
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
          <div className="pt-5 pb-5">
          {blogs.map((blog, index) => (
            <div className="pl-72 pr-72 pb-3" key={index}>
                <Card
                  type="inner"
                  title={blog.title}
                  extra={<Link to={`/blog/${blog.slug}`}>More</Link>}
                >
                  <span>{blog.content}</span>
                </Card>
                {/* <Card
                  style={{ marginTop: 16 }}
                  type="inner"
                  title="Inner Card title"
                  extra={<a href="#">More</a>}
                >
                  Inner Card content
                </Card> */}
            </div>
          ))}
          </div>
        </div>
      </>
    );
  }
}

export default Index;
