import React, { useState, useEffect } from "react";

const HookCounter6 = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("use effect");
    document.title = `Clicked ${count} times`;
  }, [count]);

  const updateCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h3>Hook Component 5 - useEffect conditionally run</h3>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e: any) => setName(e.target.value)}
        />
        <button onClick={updateCount}>Count {count}</button>
      </div>
    </div>
  );
};

export default HookCounter6;
