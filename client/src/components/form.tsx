import React, { useState } from 'react';
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

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const FormDisabledDemo: React.FC = () => {
  const [componentDisabled, setComponentDisabled] = useState<boolean>(true);
  const [loadings, setLoadings] = useState<boolean[]>([]);

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
    }, 2000);
  };

  return (
    <>
    <div className='p-5 w-full'>
    <Form
        labelCol={{ span: 14 }}
        wrapperCol={{ span: 12 }}
        layout="horizontal"
        style={{ maxWidth: 1200 }}
      >
        <Form.Item label="บทความ">
          <Input />
        </Form.Item>
        <Form.Item label="รายละเอียด">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="ผู้แต่ง">
          <Input />
        </Form.Item>
        </Form>
        <div className='flex justify-center'>
        <Space wrap>
          <Button type="primary"  loading={loadings[0]} onClick={()=> enterLoading(0)}>บันทึก</Button>
        </Space>
        </div>

      
    </div>

    </>
  );
};

export default () => <FormDisabledDemo />;