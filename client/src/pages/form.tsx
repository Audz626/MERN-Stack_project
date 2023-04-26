import React, { useState, FormEvent, useEffect, useRef } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Create } from "../services/api";
import { FormOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Card,
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
  Upload,
  Space,
} from "antd";
import "../App.css";
import Navbar from "../components/navbar";
import ImageUploader from "./imageUploadTest";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const FormDisabledDemo: React.FC = () => {
  const [loadings, setLoadings] = useState<boolean[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const apiURL = import.meta.env.VITE_API;
  const [state, setState] = useState({
    title: "",
    content: "",
    author: "",
    urlpath: "",
  });

  const { title, content, author, urlpath } = state;
  const [selectedImage, setSelectedImage] = useState(null);

  const submitForm = async () => {
    // e.preventDefault();
    // const data = await Create(state)
    console.table({ title, content, author, urlpath });
    // console.log(`API URL :${apiURL}`);
    // console.log(`return value :${data}`);

    // if (data === true){
    //   Swal.fire({
    //           icon: 'success',
    //           title: 'Your work has been created',
    //           showConfirmButton: false,
    //           text: 'บันทึกข้อมูลเรียบร้อย!!',
    //           timer: 1500
    //         })
    // }else if(data === 'กรุณากรอกข้อมูล'){
    //         Swal.fire({
    //           icon: 'info',
    //           title: data,
    //         })
    // }else if(data === 'กรุณาป้อนเนื้อหาบทความ'){
    //         Swal.fire({
    //           icon: 'info',
    //           title: data,
    //   })
    // }else if(data === 'ข้อมูลซ้ำ'){
    //   Swal.fire({
    //     icon: 'warning',
    //     title: data,
    //   })
    // }else{
    //   Swal.fire({
    //     icon: 'error',
    //     title: data,
    // })
    // }
    // axios
    //   .post(`${apiURL}/create`, { title, content, author })
    //   .then((response) => {
    //     Swal.fire({
    //       icon: 'success',
    //       title: 'Your work has been created',
    //       showConfirmButton: false,
    //       text: 'บันทึกข้อมูลเรียบร้อย!!',
    //       timer: 1500
    //     })
    //   })
    //   .catch((err) => {
    //     if(err.response.data.message === 'กรุณากรอกข้อมูล'){
    //       Swal.fire({
    //         icon: 'warning',
    //         title: err.response.data.message,
    //       })
    //     }else if(err.response.data.message === 'กรุณาป้อนเนื้อหาบทความ'){
    //       Swal.fire({
    //         icon: 'info',
    //         title: err.response.data.message,
    //       })
    //     }else{
    //       Swal.fire({
    //         icon: 'error',
    //         title: err.response.data.message,
    //       })
    //     }
    //   });
  };

  const inputValue = (name: any) => (event: any) => {
    // console.log(name);
    console.log(event.target.value);

    // setState only 1 data
    // setState({...state,['content']:event.target.value})

    setState({ ...state, [name]: event.target.value });
  };

  const handleFileUpload = async (e:any) => {
    const file = e.target
    console.log(file);
  }

  const enterLoading = (index: any) => {
    setLoadings((prev) => {
      const newLoadings = [...prev];
      newLoadings[index] = true;
      return newLoadings;
    });

    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 1000);
  };

  return (
    <>
      <Navbar />
      <div className="w-full">
        <Card
          className="mt-10 ml-[20rem] mr-[20rem] "
          title={
            <h1>
              สร้างบทความ <FormOutlined />
            </h1>
          }
          bordered={false}
        >
          {/* <h1 className="flex justify-center">เขียนบทความ</h1> */}
          <Form
            onFinish={submitForm}
            labelCol={{ span: 24 }}
            layout="horizontal"
            // style={{ maxWidth: 1000 }}
          >
            {/*  all style to set to center */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                // justifyContent: "center",
                // alignItems: "center",
                width: "100%",
              }}
            >
              <Form.Item
                label={
                  <span style={{ fontWeight: "bold" }}>
                    บทความ <FormOutlined />
                  </span>
                }
              >
                <Input value={title} onChange={inputValue("title")} />
              </Form.Item>
              <Form.Item
                label={
                  <span style={{ fontWeight: "bold" }}>
                    รายละเอียด <FormOutlined />
                  </span>
                }
              >
                <TextArea
                  rows={8}
                  value={content}
                  onChange={inputValue("content")}
                />
              </Form.Item>
              <Form.Item
                label={
                  <span style={{ fontWeight: "bold" }}>
                    ผู้แต่ง <FormOutlined />
                  </span>
                }
              >
                <Input
                  value={author}
                  onChange={(e) => {
                    setState({ ...state, author: e.target.value });
                  }}
                />
              </Form.Item>
              <Form.Item
                label={
                  <span style={{ fontWeight: "bold" }}>
                    Upload Title Image <FormOutlined />
                  </span>
                }
                valuePropName="imageURL"
              >
                {/* <Upload action="/upload.do" listType="picture-card"> */}
                <Upload 
                  listType="picture-card"
                  // value={imageURL}
                  onChange={e=>handleFileUpload(e)}
                  >
                  <div>
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>Upload</div>
                  </div>
                </Upload>
              </Form.Item>
              <div className="flex justify-center">
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loadings[0]}
                  onClick={() => enterLoading(0)}
                >
                  บันทึก
                </Button>
              </div>
            </div>
          </Form>
        </Card>
      </div>
      {/* <ImageUploader/> */}
    </>
  );
};

export default () => <FormDisabledDemo />;

