import React from "react";
import "./sideMenu.css";
import { useNavigate } from "react-router-dom";

export default function LiComponent({ name, titleCursor, class_name, link }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Navigation to: " + link);
    navigate(link);
  };

  return (
    <li className={"sideMenu_listItem" + " " + class_name} title={titleCursor}>
      <button className="sideMenu_buttonLink" onClick={handleSubmit}>
        <span>{name}</span>
      </button>
    </li>
  );
}
