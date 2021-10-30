import "./styles.css";
import { useState } from "react";

var date = "";

export default function App() {
  //const [output, setOutput] = useState("");
  function clickHandler() {
    if (checkAllDateformats());
    else console.log(getNextDate());
  }

  function getNextDate() {
    var numDateArray = getNumDateArray();

    return numDateArray;
  }
  function getNumDateArray() {
    var dateArray = date.split("-"); //["yyyy","mm","dd"]
    var d = Number(dateArray[2]);
    var m = Number(dateArray[1]);
    var y = Number(dateArray[0]);
    return [d, m, y];
  }
  function checkAllDateformats() {
    var allDateFormats = getAllDateFormats();
    var palindrome = false;
    for (var i = 0; i < allDateFormats.length; i++) {
      if (isPalindrome(allDateFormats[i])) {
        palindrome = true;
        console.log(allDateFormats[i]);
        break;
      }
    }
    return palindrome;
  }
  function getAllDateFormats() {
    var dateArray = date.split("-"); //["yyyy","mm","dd"]

    var ddmmyyyy = dateArray[2] + dateArray[1] + dateArray[0];
    var mmddyyyy = dateArray[1] + dateArray[2] + dateArray[0];
    var yyyymmdd = dateArray[1] + dateArray[2] + dateArray[0];
    var ddmmyy = dateArray[2] + dateArray[1] + dateArray[0].slice(-2);
    var mmddyy = dateArray[1] + dateArray[2] + dateArray[0].slice(-2);
    var yymmdd = dateArray[0].slice(-2) + dateArray[1] + dateArray[2];

    var allDateFormats = [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
    // console.log(dateArray);
    //console.log("date:", allDateFormats);
    return allDateFormats;
  }
  function isPalindrome(str) {
    return str === reverseStr(str);
  }
  function reverseStr(str) {
    return str.split("").reverse().join("");
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
      <h2></h2>
    </div>
  );
}
