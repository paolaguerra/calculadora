import React from "react";

export const Botones = (props) => {

  const handleClick_0 = () => {
    props.onSave("0");
  };

  const handleClick_1 = () => {
    props.onSave("1");
  };

  const handleClick_2 = () => {
    props.onSave("2");
  };

  const handleClick_3 = () => {
    props.onSave("3");
  };

  const handleClick_4 = () => {
    props.onSave("4");
  };

  const handleClick_5 = () => {
    props.onSave("5");
  };

  const handleClick_6 = () => {
    props.onSave("6");
  };

  const handleClick_7 = () => {
    props.onSave("7");
  };

  const handleClick_8 = () => {
    props.onSave("8");
  };

  const handleClick_9 = () => {
    props.onSave("9");
  };

  const handleSuma = () => {
    props.onSave("+");
  };

  const handleResta = () => {
    props.onSave("-");
  };

  const handleMultiplicar = () => {
    props.onSave("*");
  };

  const handleResultado = () => {
    props.onCalculate();
  };

  const handleBorrar = () => {
    props.onDelete();
  };

  return (
    <div className="contenedor-botones">
      <div className="botones-linea-1">
        <button onClick={handleBorrar}>AC</button>
        <button onClick={handleSuma}>+</button>
        <button onClick={handleResta}>-</button>
      </div>
      <div className="botones-linea-2">
        <button onClick={handleClick_1}>1</button>
        <button onClick={handleClick_2}>2</button>
        <button onClick={handleClick_3}>3</button>
      </div>
      <div className="botones-linea-3">
        <button onClick={handleClick_4}>4</button>
        <button onClick={handleClick_5}>5</button>
        <button onClick={handleClick_6}>6</button>
      </div>
      <div className="botones-linea-4">
        <button onClick={handleClick_7}>7</button>
        <button onClick={handleClick_8}>8</button>
        <button onClick={handleClick_9}>9</button>
      </div>
      <div className="botones-linea-5">
        <button onClick={handleClick_0}>0</button>
        <button onClick={handleMultiplicar}>*</button>
        <button onClick={handleResultado}>=</button>
      </div>
    </div>
  );
};
