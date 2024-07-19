import React from "react";
import "./HeadingMain.css";

function HeadingMain({ h1, h2, p }) {
  return (
    <div className="heading_main">
      <div className="h1">{h1}</div>
      {h2 && <div className="h2">{h2}</div>}
      {p && <p className="heading_para">{p}</p>}
    </div>
  );
}

export default HeadingMain;
