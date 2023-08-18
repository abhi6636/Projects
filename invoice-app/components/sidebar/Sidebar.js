import React from "react";
import Image from "next/image";
import logo from "../../public/logo.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <div className="sidebar__header">
          <div className="sidebar__logo">
            <h2>Retail Shop</h2>
          </div>
        </div>
        <div className="sidebar__bottom">
          <Image src={logo} alt=".." width="80" height="60" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
