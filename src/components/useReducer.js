import { act } from "@testing-library/react";
import { useReducer, useState } from "react";

function reducer(state, action) {
  if (action.type === "incremented_age") {
    return {
      age: state.age + 1,
    };
  } else {
    document.getElementById("showmsg").innerHTML = action.action;
  }
}

const Counter = () => {
  const [age, setAge] = useState(35);
  const [state, dispatch] = useReducer(reducer, { age: 42 });
  const age1 = () => {
    setAge(age + 1);
  };

  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: "incremented_age", action: "setAge Change" });
        }}
      >
        Increment age
      </button>
      <button onClick={age1}>use state button</button>
      <p>Hello! You are {state?.age}.</p>
      <p>Hello! You are {age}.</p>
      <p id="showmsg"></p>
    </>
  );
};
export default Counter;
