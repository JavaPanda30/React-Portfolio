
import React from "react";
import './ImageRound.css';

function ImageRound({ image }) { 
  return (
    <>
      <img
        className="image_round"
        src={image}
        alt="Suyash pandey"
      />
    </>
  );
}

export default ImageRound;
