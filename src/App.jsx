import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [sum, setNum] = useState(0);
  function addNum() {
    setNum(sum + 1);
  }

  function subtractNum() {
    if (sum === 0) {
      console.log("Cannot go below 0")
      alert("Cannot go below 0")
      return
    }
    setNum(sum - 1);
    
  }
  return (
    <>
      <h1>Current Value is </h1>
      <p>{sum}</p>
      <button onClick={addNum}>Add</button>
      <button onClick={subtractNum}>Subtract</button>
    </>
  );
}

export default App;
