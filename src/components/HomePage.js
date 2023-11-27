import React from "react";
import FIle from "./File";

const HomePage = ({ name }) => {

  return (
    <>
      <FIle />
      <p>{}</p>
      <p style={{ fontSize: "30px" }}>Home pAge</p>
      <p>{name}</p>
    </>
  );
};

export default HomePage;
