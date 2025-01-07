//toggle handle children with true and false
import MenuList from "./menu-list";
import React, { useState } from "react";

export default function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({}); // State to toggle the children

  function handleToggleChildren(getCurrentLabel) {
    // Function to toggle the children
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
      //   if displayCurrentChildren is { menu1: true, menu2: false },
      //   then displayCurrentChildren["menu1"] would be true.
      //   If the current value is true, !true becomes false.
      //   If the current value is false, !false becomes true.
    });
  }

  console.log(displayCurrentChildren);

  return (
    <ul>
      <div className="ml-5 flex cursor-pointer items-center gap-[20px] text-xl text-white">
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {displayCurrentChildren[item.label] ? "-" : "+"}
            {/* Change the icon to + or - based on the state */}
          </span>
        ) : null}
      </div>

      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </ul>
  );
}
