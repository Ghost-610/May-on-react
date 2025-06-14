import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const decrement = () => {
    setCount((c) => c - 1);
  }; 
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <p className="count-display"> {count} </p>

      <button className="counter-btn" onClick={increment}>
        {" "}
        Increment{" "}
      </button>

      <button className="counter-btn" onClick={reset}>
        {" "}
        RESET{" "}
      </button>

      <button className="counter-btn" onClick={decrement}>
        {" "}
        Decrement{" "}
      </button>
    </div>
  );
}

export default Counter;
