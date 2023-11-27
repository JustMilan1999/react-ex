import { useEffect, useMemo, useState } from "react";
import React from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [evenNum, setEvenNum] = useState(2);
  const useMenoConxet = useMemo(
    function evenNumDouble() {
      console.log("double");
      return evenNum * 2;
    },
    [evenNum]
  );

  //use Effect
  const [count1, setCount1] = useState(0);
  const [evenNum1, setEvenNum1] = useState(2);
  const [eventNum2, setEventNum2] = useState(2);

  useEffect(() => {
    evenNumDouble1();
  }, [evenNum1]);
  function evenNumDouble1() {
    console.log("usememo");
    setEventNum2(eventNum2 * 2);
  }
  return (
    <div>
      <h2>Counter: {count}</h2>
      <h2>Even Numbers: {evenNum}</h2>
      <h2>even Number Double Value: {useMenoConxet}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setEvenNum(evenNum + 2)}>Even Numbers</button>
      <h1>useEffect</h1>
      <h2>Counter: {count1}</h2>
      <h2>Even Numbers: {evenNum1}</h2>
      <h2>even Number Double Value: {eventNum2}</h2>
      <button onClick={() => setCount1(count1 + 1)}>Increment</button>
      <button onClick={() => setEvenNum1(evenNum1 + 2)}>Even Numbers</button>
    </div>
  );
};
export default UseMemo;
