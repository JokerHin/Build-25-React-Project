import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div className="flex items-center justify-center">
      {[...Array(noOfStars)].map((_, i) => {
        const index = i + 1;
        return (
          <FaStar
            key={i}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            size={40}
            color={index <= (hover || rating) ? "yellow" : "grey"}
          />
        );
      })}
    </div>
  );
}

export default StarRating;
