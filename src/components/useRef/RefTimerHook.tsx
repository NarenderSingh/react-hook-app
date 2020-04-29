import React, { useEffect, useRef, useState } from "react";

const RefTimerHook = () => {
  const [timer, setTimer] = useState(0);
  const interval: any = useRef();

  useEffect(() => {
    interval.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => {
      clearInterval(interval.current);
    };
  }, []);

  const clearTimer = () => {
    clearInterval(interval.current);
  };

  return (
    <div>
      {<h3>Timer : {timer}</h3>}
      <hr />
      <button type="button" onClick={clearTimer}>
        Clear Timer
      </button>
    </div>
  );
};

export default RefTimerHook;
