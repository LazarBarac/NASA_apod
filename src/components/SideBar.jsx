import React from "react";

export default function SideBar({ ...props }) {
  return (
    <section className="sideBar">
      <div className="bgOverlay"></div>
      <div className="sidebarContents">
        <h2>{props?.data.title}</h2>
        <article className="descriptionContainer">
          <p className="descriptionTitle">DESSCRIPTION</p>
          <p>{props?.data.date}</p>
          <p className="explanation">{props?.data.explanation}</p>
        </article>
        <button onClick={props.handleToogleModal}>
          <i className="fa-solid fa-arrow-right-long"></i>
        </button>
      </div>
    </section>
  );
}
