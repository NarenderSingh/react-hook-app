import React, { useState, useEffect } from "react";

const HookCounter5 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("use effect");
    document.title = `Clicked ${count} times`;
  }, [count]);

  const updateCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h3>
        Hook Component 5 - useEffect after render to update Document Title
      </h3>
      <div>
        <button onClick={updateCount}>Count {count}</button>
      </div>
    </div>
  );
};

export default HookCounter5;
