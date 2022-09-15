import React from "react";

export const TextBox = (props) => {

  return (
    <div className="contenedor-text-box">
      <input 
      className="text-box" 
      type="text" 
      placeholder="0"
      defaultValue={props.myValue}
      ></input>
    </div>
  );
};
