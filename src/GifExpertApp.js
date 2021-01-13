import React, { useState } from "react";
import AddCategory from "./Components/AddCategory";
import GrifGrid from "./Components/GrifGrid";

const GifExpertApp = () => {
  const [categorias, setcategorias] = useState(["One Punch"]);

 
  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory setCategorias={setcategorias} />
      <hr />

      <ol>
        {categorias.map((categoria) => (
          <GrifGrid categoria={categoria} key={categoria} />
        ))}
      </ol>
    </div>
  );
};

export default GifExpertApp;
