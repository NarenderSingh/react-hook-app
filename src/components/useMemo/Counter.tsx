import React, { useState, useMemo } from "react";

const Counter = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    console.log("increment one...");
    setCounterOne(counterOne + 1);
  };

  const incrementTwo = () => {
    console.log("increment two...");
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    console.log("is even...");
    let i = 1;
    while (i < 2000000000) i++;

    if (counterOne % 2 === 0) return true;
  }, [counterOne]);

  return (
    <div>
      <p>
        Counter One : {counterOne} - {isEven ? "Even" : "Odd"}
      </p>
      <p> Counter Two : {counterTwo}</p>

      <button onClick={incrementOne}>Increment Counter One</button>
      <button onClick={incrementTwo}>Increment Counter Two</button>
    </div>
  );
};

export default Counter;
