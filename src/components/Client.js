import React from "react";

const Client = ({ repo,value }) => {
  return (
    <>
      <p>{repo}</p>
      <p>{value?.Radhe} {value?.Krishna}</p>
    </>
  );
};

export default Client;
