import React from "react";
import "./content.css";

function Content({ title, image, tech, link }) {
  return (
    <div className="content">
      <img src={image} alt="" />
      <div className="content__contain">
        <div className="cont__left">
          <h2>{title}</h2>
          <h3>{tech}</h3>
        </div>
        <div className="cont__right">
          <a href={link} className="cont__button">
            <button>Demo</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Content;
