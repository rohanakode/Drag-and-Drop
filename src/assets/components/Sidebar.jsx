import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = ({ addElement }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <>
      <button
        className="menu-toggle mobile-only"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        ☰
      </button>

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <h2 className="sidebar-title">Elements</h2>
        <button className="sidebar-button" onClick={() => addElement("text")}>
          Text
        </button>
        <button className="sidebar-button" onClick={() => addElement("paragraph")}>
          Paragraph
        </button>
        <button className="sidebar-button" onClick={() => addElement("image")}>
          Image
        </button>
      </div>

      {isOpen && (
        <div className="sidebar-backdrop" onClick={toggleSidebar}></div>
      )}
    </>
  );
};

export default Sidebar;
