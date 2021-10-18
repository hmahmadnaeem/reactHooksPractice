import React from "react";
import { createContext } from "react";
import ContextApi from "./hooksList/contextApi/ContextApi";
const firstName = createContext();
const lastName = createContext();

function App() {
  return (
    <div>
      <firstName.Provider value={"Ahmad "}>
        <lastName.Provider value={"Naeem "}>
          <ContextApi />
        </lastName.Provider>
      </firstName.Provider>
    </div>
  );
}

export default App;
export { firstName, lastName };
