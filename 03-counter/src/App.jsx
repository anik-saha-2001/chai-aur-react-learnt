import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const addValue = () => {
    const newCount = count + 1;
    if (newCount <= 20) setCount(newCount);
  };
  const subValue = () => {
    const newCount = count - 1;
    if (newCount >= 0) setCount(newCount);
  };

  return (
    <>
      <div>
        <h1>Counter: {count}</h1>
        <button onClick={addValue}> Add </button>
        <button onClick={subValue}> Sub </button>
        <p>Can be counted from 0-20 only!</p>
      </div>
    </>
  );
}

export default App;
