import { Button } from "@mui/material";
import React, { useEffect } from "react";

const HomePage = () => {
  const [firstName, setFirstName] = React.useState(null);
  const [lastName, setLastName] = React.useState(null);

  useEffect(() => {
    console.log("First call on mount..");

    return () => getData();
  }, []); // <-- Have to pass in [] here!

  const getData = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
      .then((results) => results.json())
      .then((data) => {
        setFirstName(data?.species?.name);
      });
  };
  return (
    <>
      Name:
      {!firstName ? "Loading..." : `${firstName} `}
      <Button variant="contained">Api call</Button>
    </>
  );
};
export default HomePage;
