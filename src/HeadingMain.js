import React from "react";
import "./HeadingMain.css";
function HeadingMain({h1,h2,p}) {
  return (
    <>
      <div className="heading_name">
        <div className="h1">{h1}</div>
        <div className="h2"> {h2}</div>
        <p className="heading_para">{p}</p>
      </div>
    </>
  );
}

export default HeadingMain;
