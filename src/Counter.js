import React, { useState } from "react";

export function Counter({ value = 0 }) {
  //    let counter = value;
  //    const [counter, setCounter] = React.useState(value);
  const [counter, setCounter] = useState(value);
  const updateCounter = (unit) => {
    // alert(unit);
    // counter += unit;
    const newValue = counter + unit;
    setCounter(newValue);
    console.log(newValue);
  };

  return (
    <>
      <h1>Counter Sample :</h1>
      <h3>Value : {counter}</h3>
      <button onClick={() => updateCounter(1)}>+</button>
      <button onClick={() => updateCounter(-1)}>-</button>
      <button onClick={() => updateCounter(5)}>+5</button>
      <button onClick={() => updateCounter(-5)}>-5</button>
    </>
  );
}
