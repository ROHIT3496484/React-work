import React, { useState } from "react";

const Countincreanddcre = () => {
  const [val, setVal] = useState(0);
  const handleinc = () => {
    setVal(val + 1);
  };
  const handledcr = () => {
    setVal(val - 1);
  };
  return (
    <div>
      <h1>Counter App</h1>
      <span>Count {val} </span>
      <button onClick={handleinc}>increment</button>
      <button onClick={handledcr}>decrement</button>
    </div>
  );
};
export default Countincreanddcre;
