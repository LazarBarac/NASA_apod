import React from "react";

export default function Footer({ ...props }) {
  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h1>APOD Project</h1>
        <h2>{props?.data.title}</h2>
      </div>
      <button onClick={props.handleToogleModal}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
}
