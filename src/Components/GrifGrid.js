import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";

import GifGridItem from "./GifGridItem";

const GrifGrid = ({ categoria }) => {

 const {loading, data:images} = useFetchGifs( categoria );


  return (
    <div>
      <h3>{categoria}</h3>
      {loading && <p className="card-grid animate__animated animate__flash ">Loading...</p>}
      <div className="card-grid animate__animated animate__fadeIn">
        <ol>
          {images.map((img) => (
            <GifGridItem key={img.id} {...img} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default GrifGrid;
