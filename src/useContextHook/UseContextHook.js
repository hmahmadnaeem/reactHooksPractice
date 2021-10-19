import React, { useContext } from "react";
import { firstName, lastName } from "../App";
function UseContext() {
  const fName = useContext(firstName);
  const lName = useContext(lastName);

  return (
    <div>
      <h1>My name is {[fName, lName]}</h1>
    </div>
  );
}
export default UseContext;
