import React, { useState } from "react";

const HookCounter2 = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const incrementFiveCount = () => {
    for (let i = 0; i < 5; i++) {
      //setCount(count + 1); // this will not work
      setCount((count) => count + 1);
    }
  };

  return (
    <div>
      <h3>Hook Class Counter</h3>
      <div>
        <p>Count : {count}</p>
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          Increment
        </button>
        <button onClick={() => setCount((count) => count + -1)}>
          Decrement
        </button>
        <button onClick={incrementFiveCount}>Increment 5</button>
      </div>
    </div>
  );
};

export default HookCounter2;
