import React, { useContext } from "react";
import { createContext } from "react";
import UseContext from "./useContextHook/UseContextHook";
//
const firstName = createContext();
const lastName = createContext();

// main Function
function App() {
  return (
    <div>
      <firstName.Provider value={" M.Ahmad "}>
        <lastName.Provider value={"Naeem"}>
          <UseContext />
        </lastName.Provider>
      </firstName.Provider>
    </div>
  );
}
export default App;
export { firstName, lastName };
