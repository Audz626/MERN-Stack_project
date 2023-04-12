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
    <>
    {/* <div className="sticky"> */}
      <div className="pl-4 hover-to-top flex-wrap flex items-center bg-white">
      <img className="h-[90px] mr-[0px] border-none border-white cursor-pointer" src="/src/assets/BIOO.png" alt="test" />
        <Menu
          className=" py-6 pr-6 border-none bg-transparent"
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        ></Menu>
      </div>
    {/* </div> */}
    </>
  )
};

export default Navbar;
