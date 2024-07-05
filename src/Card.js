import React from "react";
import "./Card.css";

function Card({ heading, topics = [], para, image }) {
  return (
    <div className="card_container">
      <div className="card_content">
        <div className="card_image">
          <img src={image} alt="" width="100%" />
        </div>
        <div className="card_text">
          <h3>{heading}</h3>
          {topics.length > 0 && (
            <div className="card_topics">
              {topics.map((topic, index) => (
                <div key={index} className="card_topic">
                  {topic}
                </div>
              ))}
            </div>
          )}
          <p>{para}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
