import React, { useContext } from "react";
import ComponentD from "./ComponentD";
import { UserContext } from "./ComponentA";

function ComponentC() {
  const user = useContext(UserContext);
  return (
    <div className="box">
      <h1>Component C</h1>
      <h3>{`Hello again ${user}`}</h3>
      <ComponentD />
    </div>
  );
}

export default ComponentC;
