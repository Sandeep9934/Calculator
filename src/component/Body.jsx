import React, { useState } from "react";
import "./Body.css";
function Body() {
  const [inputValues, setInputValues] = useState([]);

  const handleClick = (value) => {
    if (value === "=") {
      try {
        const result = eval(inputValues.join(""));
        setInputValues([result.toString()]);
      } catch (error) {
        setInputValues(["Error"]);
      }
    } else if (value === "AC") {
      setInputValues([]);
    } else if (value === "ans") {
      setInputValues((prevValues) => [...prevValues, "ans"]);
    } else if (value === "x!") {
      setInputValues((prevValues) => [...prevValues, "factorial("]);
    } else {
      setInputValues((prevValues) => [...prevValues, value]);
    }
  };

  // Function to calculate factorial
  const factorial = (n) => {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  };

  return (
    <body>
      <div className="body">
        <div className="input">
          <input type="text" value={inputValues.join(" ")} readOnly />
        </div>
        <div className="button-container">
          <button className="button" onClick={() => handleClick("(")}>
            (
          </button>
          <button className="button" onClick={() => handleClick(")")}>
            )
          </button>
          <button className="button" onClick={() => handleClick("%")}>
            %
          </button>
          <button className="button" onClick={() => handleClick("+")}>
            +
          </button>
          <button className="button" onClick={() => handleClick("ans")}>
            ANS
          </button>
        </div>
        <div className="button-container">
          <button className="button" onClick={() => handleClick("7")}>
            7
          </button>
          <button className="button" onClick={() => handleClick("8")}>
            8
          </button>
          <button className="button" onClick={() => handleClick("9")}>
            9
          </button>
          <button className="button" onClick={() => handleClick("/")}>
            ÷
          </button>
          <button className="button" onClick={() => handleClick("-")}>
            -
          </button>
        </div>
        <div className="button-container">
          <button
            className="button"
            onClick={() => handleClick("*3.14159265359")}
          >
            π
          </button>
          <button className="button" onClick={() => handleClick("4")}>
            4
          </button>
          <button className="button" onClick={() => handleClick("5")}>
            5
          </button>
          <button className="button" onClick={() => handleClick("6")}>
            6
          </button>
          <button className="button" onClick={() => handleClick("*")}>
            *
          </button>
        </div>
        <div className="button-container">
          <button
            className="button"
            onClick={() => handleClick("*2.71828182846")}
          >
            e
          </button>
          <button className="button" onClick={() => handleClick("/")}>
            /
          </button>
          <button className="button" onClick={() => handleClick("1")}>
            1
          </button>
          <button className="button" onClick={() => handleClick("2")}>
            2
          </button>
          <button className="button" onClick={() => handleClick("3")}>
            3
          </button>
        </div>
        <div className="button-container">
          <button className="button" onClick={() => handleClick("AC")}>
            AC
          </button>
          <button className="button" onClick={() => handleClick("0")}>
            0
          </button>
          <button className="button" onClick={() => handleClick(".")}>
            .
          </button>
          <button className="button" onClick={() => handleClick("=")}>
            =
          </button>{" "}
          <button className="button" onClick={() => handleClick("x!")}>
            X!
          </button>
        </div>
      </div>
    </body>
  );
}

export default Body;
