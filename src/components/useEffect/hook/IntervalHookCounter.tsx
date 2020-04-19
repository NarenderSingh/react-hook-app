import React, { useState, useEffect } from "react";
import HookMouse from "./HookMouse";

const IntervalHookCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  const tick = () => {
    setCount((count) => count + 1);
  };

  return (
    <div>
      <h4>Interval Hook Counter - useEffect with incorrect dependecny</h4>
      {count}
    </div>
  );
};

export default IntervalHookCounter;
