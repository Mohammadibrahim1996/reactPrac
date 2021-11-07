import React, { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const handleIncreament = () => {
    setCounter(counter + 1 );
  };
  const handleDecreament = () => {
    setCounter(counter - 1);
  };
  const handleReset = () => {
    setCounter(counter * 0);
  };

  return (
    <div>
      <div
        style={{
          fontSize: "120%",
          position: "relative",
        }}
      >
        {counter}
      </div>
        <button
          style={{
            color: "#fff",
            position: "relative",
            borderRadius: "5px",
            backgroundColor: "green",
            padding: "10px",
            margin:"10px"
          }}
          onClick={handleIncreament}
        >
          Increament
        </button>
        <button
          style={{
            color: "#fff",
            position: "relative",
            borderRadius: "5px",
            backgroundColor: "red",
            padding: "10px",
            margin:"10px"
          }}
          onClick={handleDecreament}
        >
          Decrement
        </button>
        <button
          style={{
            color: "#fff",
            position: "relative",
            borderRadius: "5px",
            backgroundColor: "black",
            padding: "10px",
            margin:"10px"
          }}
          onClick={handleReset}
        >
          Reset
        </button>
      
    </div>
  );
};
