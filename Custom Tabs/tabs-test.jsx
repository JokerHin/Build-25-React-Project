//parent
import React, { Component } from "react";
import Tabs from "./tabs";

function RandomComponent() {
  return <div>Random component</div>;
}

export default function TabsTest() {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>Tab 1 content</div>,
    },
    {
      label: "Tab 2",
      content: <div>Tab 2 content</div>,
    },
    {
      label: "Tab 3",
      content: <RandomComponent />,
    },
  ];
  function handleChange(currentTabIndex) {
    console.log(currentTabIndex);
  }
  return <Tabs tabsContent={tabs} onChange={handleChange} />;
}
