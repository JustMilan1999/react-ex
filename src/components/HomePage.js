import React, { useEffect } from "react";

const HomePage = () => {
  const [firstName, setFirstName] = React.useState(null);
  const [lastName, setLastName] = React.useState(null);

  useEffect(() => {
    console.log("First call on mount..");

    return () => getData();
  }, []); // <-- Have to pass in [] here!

  const getData = () => {
    fetch("https://randomuser.me/api/")
      .then((results) => results.json())
      .then((data) => {
        const { name } = data.results[0];
        setFirstName(name.first);
        setLastName(name.last);
      });
  };
  return (
    <>
      Name:
      {!firstName || !lastName ? "Loading..." : `${firstName} ${lastName}`}
    </>
  );
};
export default HomePage;
