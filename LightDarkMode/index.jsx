import React, { useState } from "react";
import useLocalStorage from "./useLocalStorage";
import "./theme.css";

export default function LightDarkMode() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleToggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <h1 className="mb-9 text-3xl font-bold">{theme}</h1>
        <button onClick={handleToggleTheme} className="">
          Change Theme
        </button>
      </div>
    </div>
  );
}
