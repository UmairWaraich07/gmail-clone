import React from "react";
import "./SidebarOption.css";

const SidebarOption = ({ Icon, title, active, message }) => {
  return (
    <div className={`sidebarOption ${active && "active"}`}>
      <div className="sidebarOption__div">
        {Icon && <Icon className="sidebarOption__icon" />}
        <p>{title}</p>
      </div>
      <p>{message}</p>
    </div>
  );
};

export default SidebarOption;
