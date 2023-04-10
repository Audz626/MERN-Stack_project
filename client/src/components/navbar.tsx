import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  AppstoreTwoTone,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import "./../assets/style/navbar.css";

const items: MenuProps["items"] = [
  {
    label: "หน้าแรก",
    key: "home",
    icon: <MailOutlined />,
    // className: 'hover-to-top'
  },
  {
    label: "เขียนบทความ",
    key: "WriteArticle",
    icon: <AppstoreOutlined />,
    disabled: false,
    // className: 'hover-to-top'
  },
];

const Navbar: React.FC = () => {
  const [current, setCurrent] = useState("home");
  const onClick: MenuProps["onClick"] = (e: any) => {
    console.log(`click : ${e.key}`);
    setCurrent(e.key);
  };

  return (
    <div>
      <nav>
        <Menu
          className="hover-to-top p-8"
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        ></Menu>
      </nav>
      ;
    </div>
  );
};

export default Navbar;
