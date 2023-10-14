import React from "react";
import "./Card.css";
function Card({heading, para, image}) {
  return (
    <>
      <div className="card_container">
        <div className="card_content">
          <div className="card_image">
            <img
              src={image}
              alt=""
            />
          </div>
          <div className="card_text">
          <h3>{heading}</h3>
          <div>
            {para}
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
