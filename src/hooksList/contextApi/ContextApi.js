import React from "react";
import { Consumer } from "react";
import { firstName, lastName } from "../../App";

const ContextApi = () => {
  return (
    <div>
      <firstName.Consumer>
        {(fName) => {
          return (
            <lastName.Consumer>
              {(lName) => {
                return (
                  <h1>
                    My name is {fName} {lName}
                  </h1>
                );
              }}
            </lastName.Consumer>
          );
        }}
      </firstName.Consumer>
    </div>
  );
};
export default ContextApi;
