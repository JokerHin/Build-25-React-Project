import React from "react";
import useWindowResize from ".";

export default function UseWindowResizeTest() {
  const windowSize = useWindowResize(); //get windowSize from useWindowResize function
  const { width, height } = windowSize; //get width and height from windowSize

  return (
    <div>
      <h1>Use Window resize Hook</h1>
      <p>Width is {width}</p>
      <p>Height is {height}</p>
    </div>
  );
}
