import React from "react";
import Data from "./Data";

const FIle = ({ val,repo,value,secValue }) => {
  return <>
  <Data repo={repo}/>
  {val}
  <p>{value}</p>
  <p>{secValue}</p>
  </>;
};

export default FIle;
