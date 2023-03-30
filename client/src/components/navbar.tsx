import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import './../assets/style/navbar.css'

const items: MenuProps['items'] = [
  {
    label: 'หน้าแรก',
    key: 'home',
    icon: <MailOutlined />,
  },
  {
    label: 'เขียนบทความ',
    key: 'WriteArticle',
    icon: <AppstoreOutlined />,
    disabled: false,
  },
];

const Navbar: React.FC = () => {
  const [current, setCurrent] = useState('home');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log(`click : ${e.key}`);
    setCurrent(e.key);
  };

  return <Menu className='hover-to-top' onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}></Menu>;
};

export default Navbar;