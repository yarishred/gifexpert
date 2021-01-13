import React from "react";

const GifGridItem = ({ title, url }) => {
  return (
    <div>
      <div className="card animate__animated animate__fadeIn ">
        <img src={url} />
        <p>{title}</p>
      </div>
    </div>
  );
};

export default GifGridItem;
