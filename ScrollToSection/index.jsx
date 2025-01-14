import React, { useRef } from "react";

export default function ScrollToSection() {
  const ref = useRef();

  const data = [
    {
      label: "First Card",
      style: {
        width: "100%",
        height: "600px",
        background: "red",
      },
    },
    {
      label: "Second Card",
      style: {
        width: "100%",
        height: "600px",
        background: "grey",
      },
    },
    {
      label: "Third Card",
      style: {
        width: "100%",
        height: "600px",
        background: "blue",
      },
    },
    {
      label: "Fourth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "green",
      },
    },
    {
      label: "Fifth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "orange",
      },
    },
  ];

  function handleScrollToSection() {
    let pos = ref.current.getBoundingClientRect().top;

    window.scrollTo({
      top: pos,
      behavior: "smooth",
    });
  }

  function ScrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <div>
      <h1 className="p-4 text-2xl font-bold">Scroll to a particular section</h1>
      <button
        className="rounded-md bg-sky-300 p-2 px-4 text-white hover:bg-sky-400 hover:text-gray-300"
        onClick={handleScrollToSection}
      >
        Click To Scroll
      </button>
      {data.map((item, index) => {
        return (
          <div ref={index === 3 ? ref : null} key={index} style={item.style}>
            <h3>{item.label}</h3>
          </div>
        );
      })}
      <button
        className="rounded-md bg-sky-300 p-2 px-4 text-white hover:bg-sky-400 hover:text-gray-300"
        onClick={ScrollToTop}
      >
        {" "}
        Scroll to Top
      </button>
    </div>
  );
}
