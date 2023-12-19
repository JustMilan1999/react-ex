import React, { useState } from "react";

const Counter1 = () => {
  const [val, setVal] = useState(0);
  return (
    <>
      <p>{val}</p>
      {/* <input type="text" value={val} placeholder="add value" /> */}
      <button onClick={() => setVal(val < 10 ? val + 1 : 10)}>+</button>
      <button onClick={() => setVal(val - 1)}>-</button>
      <p>slkfhslksdlfkjlfkjslfjslfjslfjdlfjl</p>
    </>
  );
};

export default Counter1;
