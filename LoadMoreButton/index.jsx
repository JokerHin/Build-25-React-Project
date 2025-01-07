import React, { useState, useEffect } from "react";

function loadMoreButton() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`,
      );
      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDisableButton(true);
  }, [products]);

  if (loading) {
    return <div className="text-xl">Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center gap-20">
      <div className="grid grid-cols-4 gap-10">
        {products && products.length
          ? products.map((items) => (
              <div
                className="flex flex-col gap-5 border border-slate-600 p-10"
                key={items.id}
              >
                <img src={items.thumbnail} alt={items.title} />
                <p>{items.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>
          Load More Products
        </button>
        {disableButton && <p className="text-xl">No more products to load</p>}
      </div>
    </div>
  );
}

export default loadMoreButton;
