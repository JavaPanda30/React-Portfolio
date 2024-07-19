import React from "react";
import './ImageRound.css';

function ImageRound({ image }) {
  return (
    <div className="image-round-container">
      <img
        className="image_round"
        src={image}
        alt="Suyash Pandey"
      />
    </div>
  );
}

export default ImageRound;
