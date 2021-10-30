import "./styles.css";
import { useState } from "react";
var inputDate = "";
export default function App() {
  const [date, setDate] = useState("");
  const [output, setOutput] = useState("");

  function clickHandler() {
    if (inputDate === "") setOutput("Please Enter a valid date");
    else {
      if (checkAllDateformats(inputDate)) {
        setOutput("Your BirthDay is a Palindrome");
      } else console.log(getNextDate(inputDate));
    }
  }
  function getNextPalindromeDate(date) {
    var count = 1;
    setDate(getNextDate(date));
    while (!checkAllDateformats(date)) {
      count++;
      //setDate()
    }
  }
  function getNextDate(date) {
    var numDateArray = getNumDateArray(date);
    var d = numDateArray[0] + 1;
    var m = numDateArray[1];
    var y = numDateArray[2];
    var dayInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (m === 2) {
      if (isLeapYear(y)) {
        if (d > 29) {
          m++;
          d = 1;
        }
      } else if (d > 28) {
        m++;
        d = 1;
      }
    } else if (d > dayInMonth[m - 1]) {
      m++;
      d = 1;
    }

    if (m > 12) {
      //check
      m = 1;
      y++;
    }
    var newDateArray = [d, m, y];
    return dateToString(newDateArray);
  }
  function dateToString(numDateArray) {
    var d = numDateArray[0];
    var m = numDateArray[1];
    var y = numDateArray[2];
    var dd, mm, yy;
    if (d < 10) {
      dd = "0" + d;
    } else {
      dd = "" + d;
    }
    if (m < 10) {
      mm = "0" + m;
    } else {
      mm = "" + m;
    }
    yy = "" + y;
    // console.log(yy + "-" + mm + "-" + dd);
    return yy + "-" + mm + "-" + dd;
  }
  function isLeapYear(year) {
    if (year % 400 === 0) return true;
    if (year % 100 === 0) return false;
    if (year % 4 === 0) return true;

    return false;
  }
  // converts date from string to number array
  function getNumDateArray(date) {
    var dateArray = date.split("-"); //["yyyy","mm","dd"]
    var d = Number(dateArray[2]);
    var m = Number(dateArray[1]);
    var y = Number(dateArray[0]);
    return [d, m, y];
  }

  /* receives all date formats from getAllDate()
   * checks if any of them is palindrome
   * if found breaks and returns true
   */

  function checkAllDateformats(date) {
    var allDateFormats = getAllDateFormats(date);
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
  function getAllDateFormats(date) {
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
          inputDate = e.target.value;
        }}
        required
      ></input>
      <button type="submit" onClick={clickHandler}>
        Check
      </button>
      <h2>{output}</h2>
    </div>
  );
}
