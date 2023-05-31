import React from "react";
import "./acontent.css";


function Acontent({ title, image, tech, link }) {
  return (
    <div className="Acontent">
      <img src={image} alt="" />
      <div className="Acontent__contain">
        <div className="acont__left">
          <h2>{title}</h2>
          <h3>{tech}</h3>
        </div>
        <div className="acont__right">
          <a href={link} target="_blank" rel="noreferrer" className="acont__button">
            <button>Visit</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Acontent;