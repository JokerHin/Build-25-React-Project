import React, { useState } from "react";

export default function CustomTabs({ tabsContent, onChange }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleOnClick(getCurrentIndex) {
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  }
  return (
    <div className="p-[8px]">
      <div className="mb-6 flex justify-center space-x-4">
        {tabsContent.map((tabItem, index) => (
          <div
            className={`inline-flex cursor-pointer bg-green-500 p-5 text-center text-xl font-bold text-white active:border active:bg-green-300 ${currentTabIndex === index ? "active" : ""}`}
            onClick={() => handleOnClick(index)}
            key={tabItem.label}
          >
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className="mt-5 text-4xl font-bold text-red-500">
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
}
