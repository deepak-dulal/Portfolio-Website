import React from "react";
import { AiFillCode, AiFillHome, AiOutlineGithub } from "react-icons/ai";
import { BsMedium } from "react-icons/bs";

const menuConfig = {
  sidebarData: [
    {
      id: "menu-0",
      title: "Home",
      path: "/",
      icon: <AiFillHome size={25} />,
      className: "nav-text",
    },
    {
      id: "menu-1",
      title: "Projects",
      path: "/projects",
      icon: <AiOutlineGithub size={25} />,
      className: "nav-text",
    },
    {
      id: "menu-2",
      title: "Blogs",
      path: "/blogs",
      icon: <BsMedium size={25} />,
      className: "nav-text",
    },
    {
      id: "menu-3",
      title: "Skills",
      path: "/skills",
      icon: <AiFillCode size={25} />,
      className: "nav-text",
    },
  ],
};

function Menu() {
  return (
    <nav className="menu-bar" style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 20px",
      backgroundColor: "#222",
      color: "#fff"
    }}>
      {/* Left side menu items */}
      <ul
        className="menu-items"
        style={{ display: "flex", listStyle: "none", gap: "20px", margin: 0, padding: 0 }}
      >
        {menuConfig.sidebarData.map((item) => (
          <li key={item.id} className={item.className}>
            <a
              href={item.path}
              style={{ color: "white", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px" }}
            >
              {item.icon}
              {item.title}
            </a>
          </li>
        ))}
      </ul>

      {/* Right side download resume button */}
      <a
        href="/assets/resume.pdf"
        download
        className="download-resume-btn"
        style={{
          padding: "8px 16px",
          backgroundColor: "#4CAF50",
          color: "white",
          borderRadius: "4px",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "14px",
          whiteSpace: "nowrap"
        }}
      >
        Download Resume
      </a>
    </nav>
  );
}

export default Menu;
