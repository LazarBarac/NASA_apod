import React from "react";

export default function Main({ ...props }) {
  return (
    <div className="imgContainer">
      <img
        className="bgImage"
        src={props.data.url}
        alt={props.data.title || "bg-img"}
      />
    </div>
  );
}
