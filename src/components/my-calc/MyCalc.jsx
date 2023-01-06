import React, { useRef, useState } from "react";

function MyCalc() {
  const [val, setVal] = useState({});

  const valueOneRef = useRef();
  const valueTwoRef = useRef();

 const calcAndResult = () => {
    setVal(valueOneRef.current.value + valueTwoRef.current.value);
  };

  return (
    <>
      <div>result: {val}</div>;
      <div>
        value 1: <input ref={valueOneRef} />
      </div>
      <div>
        value 2: <input ref={valueTwoRef} />
      </div>
      <button onClick={calcAndResult}>calc</button>
    </>
  );
}

export default MyCalc;
