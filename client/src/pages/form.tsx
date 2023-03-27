import React, { useState, FormEvent,useEffect } from 'react';
import axios from 'axios';
import { PlusOutlined } from '@ant-design/icons';
import {
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
} from 'antd';
import '../App.css';
import Navbar from '../components/navbar';

const { RangePicker } = DatePicker;
const { TextArea } = Input;


const FormDisabledDemo: React.FC = () => {
  const [componentDisabled, setComponentDisabled] = useState<boolean>(true);
  const [loadings, setLoadings] = useState<boolean[]>([]);
  const apiURL = import.meta.env.VITE_API;
  
  useEffect(() => {
    console.log("api :29",apiURL)
  }
    )
  
  const submitForm = (e:any) => {
    // e.preventDefault();
    console.table({title, content, author})
    console.log(`API URL :${apiURL}`)
    axios
    .post(`${process.env.REACT_APP_API}/create`, {title,content,author})
    .then(response => {
      alert("บันทึกข้อมูลเรียบร้อย");
    })
    .catch(err => {
      alert(err.response.data.error)
    })
  }

  const [state, setState] = useState({
    title: "",
    content: "",
    author:""
  });

  const {title, content, author} = state;

  const inputValue = (name:any) => (event:any) => {
    // console.log(event.target.value)
    setState({...state,[name]:event.target.value})
  }

  const enterLoading = (index : any) => {
    setLoadings((prev)=>{
      const newLoadings = [...prev];
      newLoadings[index] = true;
      return newLoadings;
    })

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
    <Navbar/>
    <div className='p-5 w-full'>
      <h1 className='p-2 flex justify-center'>เขียนบทความ</h1>

      <Form
          onFinish={submitForm}
          labelCol={{ span: 14 }}
          wrapperCol={{ span: 12 }}
          layout="horizontal"
          style={{ maxWidth: 1200 }}
        >
          <Form.Item label="บทความ">
            <Input value={title} onChange={inputValue('title')}/>
          </Form.Item>
          <Form.Item label="รายละเอียด">
            <TextArea rows={4} value={content} onChange={inputValue('content')}/>
          </Form.Item>
          <Form.Item label="ผู้แต่ง">
            <Input value={author} onChange={inputValue('author')}/>
          </Form.Item>
        <div className='flex justify-center'>
          <Button type="primary" htmlType="submit" loading={loadings[0]} onClick={()=> enterLoading(0)}>บันทึก</Button>
        </div>
      </Form>      
    </div>
    </>
  );
};

export default () => <FormDisabledDemo />;