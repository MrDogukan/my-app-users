import React from "react";
import { useState } from "react";
import "../App.css";

const FuncComp = ({ age, color }) => {
  const [counter, setCounter] = useState(0);
  const [colour, setColour] = useState("red");

  const incCounter = () => {
    setCounter(counter + 1);
  };

  const decCounter = () => {
    setCounter(counter - 1);
  };

  const toZero = () => {
    setCounter(0);
  };

  const changeColor = () => {
    setColour("blue");
  };
  return (
    <div style={{ backgroundColor: `${colour}` }}>
      <h1>Hello World</h1>
      <p>Age: {age}</p>
      <p>Color : {color.toUpperCase()}</p>
      <p>Counter : {counter}</p>
      <p>Colour : {colour}</p>
      <button onClick={incCounter}>Increase</button>
      <button onClick={decCounter}>Decrease</button>
      <button onClick={toZero}>To Zero</button>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};

export default FuncComp;
