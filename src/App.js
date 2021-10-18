import React, { useState } from "react";
function App() {
  const [numValue, setNumValue] = useState(10);

  const Incre = () => {
    setNumValue(numValue + 5);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1>{numValue}</h1>
      <button onClick={Incre}>Click Me</button>
    </div>
  );
}

export default App;
