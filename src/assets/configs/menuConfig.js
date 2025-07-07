import React from "react";

import { AiFillCode, AiFillHome, AiOutlineGithub } from "react-icons/ai";
import { FaFileDownload } from "react-icons/fa";

import { BsMedium } from "react-icons/bs";

const menuConfig = {
  sidebarData: [
    {
      id: "menu-0",
      title: "Home",
      path: "/",
      icon: <AiFillHome size={35} />,
      className: "nav-text",
    },
    {
      id: "menu-1",
      title: "Projects",
      path: "/projects",
      icon: <AiOutlineGithub size={35} />,
      className: "nav-text",
    },
    {
      id: "menu-2",
      title: "Blogs",
      path: "/blogs",
      icon: <BsMedium size={35} />,
      className: "nav-text",
    },
    {
      id: "menu-3",
      title: "Skills",
      path: "/skills",
      icon: <AiFillCode size={35} />,
      className: "nav-text",
    },
    {
    id: "menu-4",
    title: "Resume",
    path: "https://drive.google.com/file/d/1T9L5tuz1GsNOaRm9xGiR9UQDCG---Ois/view?usp=sharing",
    icon: <FaFileDownload size={30} />,
    className: "nav-text",
    external: true,
    download: true
  },
  ],
};

export default menuConfig;