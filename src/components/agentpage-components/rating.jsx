import { useState } from "react";
import StarFilled from "/Users/user/Desktop/frontend/src/assets/icons/star-filled.svg";
import StarBlank from "/Users/user/Desktop/frontend/src/assets/icons/star-blank.svg";

export default function StarRating () {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
  return (
    <div className="flex text-base gap-4">
        <p>Rating:</p>
      <div className="flex space-x-2">
        {/* Create an array of 5 items to map over, from 1 to 5 */}
        {[...Array(5)].map((_, index) => {
          const starValue = index + 1;

          return (
            <button
              key={starValue}
              type="button"
              className="focus:outline-none transition-all duration-200 ease-in-out transform hover:scale-125"
              onClick={() => setRating(starValue)}
              onMouseEnter={() => setHover(starValue)}
              onMouseLeave={() => setHover(0)}
            >
              {/*
                The star is filled if the starValue is less than or equal to
                the current hover state (for visual feedback) or the
                selected rating.
              */}
              {(hover || rating) >= starValue ? (
                <img src={StarFilled} alt="Star-filled" />
              ) : (
                <img src={StarBlank} alt="Blank-Star" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};  
