import React, { useRef } from "react";
import useFetch from "../use-fetch";

export default function ScrollToTopAndBottom() {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {},
  );

  const bottomRef = useRef(null);

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  function handleScrollToBottom() {
    bottomRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  if (error) {
    return <h1>Error occured ! Please try</h1>;
  }

  if (pending) {
    return <h1>Loading ! Please Wait</h1>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Scroll To Top and Bottom Feature</h1>
      <h3 className="text-xl font-bold"> This is the top section </h3>
      <button
        onClick={handleScrollToBottom}
        className="translate-x-1 cursor-pointer rounded-md bg-slate-300 p-2 px-4 font-bold transition delay-150 ease-in-out hover:bg-slate-400"
      >
        Scroll To Bottom
      </button>
      <ul className="list-none">
        {data && data.products && data.products.length > 0
          ? data.products.map((dataItem, index) => (
              <li key={index}>{dataItem.title}</li>
            ))
          : null}
      </ul>
      <button
        onClick={handleScrollToTop}
        className="translate-x-1 cursor-pointer rounded-md bg-slate-300 p-2 px-4 font-bold transition delay-150 ease-in-out hover:bg-slate-400"
      >
        Scroll To Top
      </button>
      <div ref={bottomRef}></div>
      <h3 className="text-xl font-bold">This is the bottom of this page</h3>
    </div>
  );
}
