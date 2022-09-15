import React, { useState } from "react";
import { Botones } from "./botones";
import "./index.css";
import { TextBox } from "./textBox";

export const Contenedor = (props) => {
  const [value, setMyValue] = useState("");
  const [result, setResult] = useState("");

  const parse = (numero) => {
    return Function(`return (${numero})`)();
  };

  const handleSave = (numero) => {
    const ultimoCaracter = value.charAt(value.length - 1);
    if (
      ((ultimoCaracter === "+" ||
        ultimoCaracter === "-" ||
        ultimoCaracter === "*") &&
        (numero === "+" || numero === "-" || numero === "*")) ||
      (value === "" && (numero === "+" || numero === "-" || numero === "*"))
    ) {
      return;
    }
    setMyValue(value + numero);
  };

  const handleCalculate = () => {
    setResult(parse(value));
    console.log(result);
  };

  const buttonAC = () => {
    setResult("0");
    setMyValue("");
  };

  return (
    <>
      <h1 className="titulo-principal">Calculadora</h1>
      <div className="contenedor">
        <div className="result-and-calculator">
          <p className="result">{result}</p>
          <TextBox myValue={value}></TextBox>
        </div>
        <Botones
          onSave={handleSave}
          onCalculate={handleCalculate}
          onDelete={buttonAC}
        ></Botones>
      </div>
    </>
  );
};
