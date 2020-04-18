import React, { useState } from "react";

const HookCounter = () => {
  const [count, setCount] = useState(1);

  return (
    <div>
      <h3>Hook Counter Component</h3>
      <div>
        <button onClick={() => setCount(count + 1)}>Count {count}</button>
      </div>
    </div>
  );
};

export default HookCounter;
