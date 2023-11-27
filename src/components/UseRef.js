import React, { forwardRef } from "react";

const UseRef = (props, ref) => {
  const onInputref = () => {
    console.log("ref", ref.current);
    ref.current.value = "1000";
  };
  return (
    <>
      <button onClick={onInputref}>Edit</button>
    </>
  );
};

export default forwardRef(UseRef);
