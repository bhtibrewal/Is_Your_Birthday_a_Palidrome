import "./styles.css";
import { useState } from "react";

var date = "";
export default function App() {
  const [output, setOutput] = useState("");
  function clickHandler() {
    console.log(date);
  }

  return (
    <div className="App section">
      <h1>Palindrome Birthday!</h1>
      <h3>Check is your birthday a palindrome</h3>
      <input
        type="date"
        onChange={(e) => {
          date = e.target.value;
        }}
        required
      ></input>
      <button type="submit" onClick={clickHandler}>
        Check
      </button>
    </div>
  );
}
