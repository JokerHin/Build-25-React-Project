import React, { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

function ImageSlider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    setLoading(true);
    try {
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  const handleDragStart = (e) => {
    e.dataTransfer.setData("startX", e.clientX);
  };

  const handleDragEnd = (e) => {
    const startX = e.dataTransfer.getData("startX");
    const endX = e.clientX;
    if (startX > endX) {
      handleNext();
    } else {
      handlePrevious();
    }
  };

  if (loading) return <h1>Loading data... Please wait</h1>;

  if (errorMsg !== null) return <h1>Error occurred! {errorMsg}</h1>;

  return (
    <div className="relative flex h-[450px] w-[600px] items-center justify-center">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="absolute left-1 h-8 w-8 cursor-pointer text-white drop-shadow"
      />
      {images && images.length > 0
        ? images.map((imagesItems, index) => (
            <img
              key={imagesItems.id}
              alt={imagesItems.download_url}
              src={imagesItems.download_url}
              className={
                currentSlide === index
                  ? "h-full w-full rounded-lg shadow"
                  : "hidden"
              }
              draggable
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="absolute right-1 h-8 w-8 cursor-pointer text-white drop-shadow"
      />
      <span className="absolute bottom-1 flex space-x-2">
        {images && images.length > 0
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "my-1 h-3 w-3 cursor-pointer rounded-full border-none bg-white outline-none"
                    : "my-1 h-3 w-3 cursor-pointer rounded-full border-none bg-gray-400 outline-none"
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}

export default ImageSlider;
