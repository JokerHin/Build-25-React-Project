import React, { useState, useEffect } from "react";

export default function ({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(url) {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  function handleScrollPercentage() {
    // console.log(
    //   document.body.scrollTop,
    //   document.documentElement.scrollTop,
    //   document.documentElement.scrollHeight,
    //   document.documentElement.clientHeight,
    // );
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height = //get the current height of the page
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, [scrollPercentage]);

  if (loading) {
    <div>Loading...</div>;
  }
  if (errorMessage) {
    <div>{errorMessage}</div>;
  }

  return (
    <div className="scroll-indicator">
      <div className="fixed left-0 right-0 top-0 z-0 w-full bg-green-500 p-4 text-center text-white shadow-md">
        <h1 className="mb-4 text-4xl font-bold">Custom Scroll Indicator</h1>
        <div className="relative h-[10px] w-full rounded-full bg-green-300">
          <div
            className="h-[10px] rounded-full bg-yellow-200"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <div>
        {data && data.length > 0
          ? data.map((product, index) => (
              <div key={index} className="scroll-indicator__bar__item">
                <p className="scroll-indicator__bar__item__title">
                  {product.title}
                </p>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
