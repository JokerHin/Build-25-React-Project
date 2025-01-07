//Receive menu and pass it to menu list
import React from "react";
import MenuList from "./menu-list.jsx";

export default function TreeView({ menus = [] }) {
  return (
    <div className="h-lvh w-[350px] bg-blue-300 p-5">
      <MenuList list={menus} />
    </div>
  );
}
