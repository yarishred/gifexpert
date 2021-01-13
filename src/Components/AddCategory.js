import React, { useState } from "react";
import PropTypes from 'prop-types'

const AddCategory = ({ setCategorias }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Prevenir de agregar elementos si no hay caracteres en el input 
    if (inputValue.trim().length >= 1) {

      //Agregar el elemento del input value al array categorias
      setCategorias((categoria) => [inputValue, ...categoria, ]);

      //retorna el elemento a un string vacio 
      setInputValue("");
    }
   
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

AddCategory.propTypes ={
    setCategorias: PropTypes.func.isRequired
}

export default AddCategory;
