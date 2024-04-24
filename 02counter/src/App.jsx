import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  // let counter = 15;

  function addValue() {
    if (counter >= 20) {
      return;
    }
    setCounter(counter + 1);
    // console.log(counter);
  }

  function removeValue() {
    if (counter <= 0) {
      return;
    }
    setCounter(counter - 1);
    // console.log(counter);
  }

  return (
    <>
      <h1>initkloud</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <button onClick={removeValue}>Remove value {counter}</button>
    </>
  );
}

export default App;
