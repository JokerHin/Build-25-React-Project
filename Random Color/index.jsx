import React, { useEffect, useState } from "react";

function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    // #678765
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(255);
    const g = randomColorUtility(255);
    const b = randomColorUtility(255);

    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  useEffect(() => {
    if (typeOfColor === "rgb") {
      handleCreateRandomRgbColor();
    } else {
      handleCreateRandomHexColor();
    }
  }, [typeOfColor]);

  return (
    <div
      className="h-screen w-screen text-center"
      style={{ backgroundColor: color }}
    >
      <button
        onClick={() => setTypeOfColor("hex")}
        className="mx-3 bg-green-500 px-3 py-1 text-white"
      >
        Create HEX Color
      </button>
      <button
        onClick={() => setTypeOfColor("rgb")}
        className="mx-3 bg-green-500 px-3 py-1 text-white"
      >
        Create RGB Color
      </button>
      <button
        onClick={
          typeOfColor == "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
        className="mx-3 bg-green-500 px-3 py-1 text-white"
      >
        Generate Random Color
      </button>
      <h3 className="mt-10 text-xl font-bold text-white">
        {typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}
      </h3>
      <h1 className="mt-10 text-6xl font-bold text-white">{color}</h1>
    </div>
  );
}

export default RandomColor;
