import React from "react";
import "./sideMenu.css";

export default function LiComponent({ name, titleCursor, link, class_name }) {
  return (
    <li className={"sideMenu_listItem" + " " + class_name} title={titleCursor}>
      <button className="sideMenu_buttonLink">
        <a className="sideMenu_link" href={link}>
          {name}
        </a>
      </button>
    </li>
  );
}
