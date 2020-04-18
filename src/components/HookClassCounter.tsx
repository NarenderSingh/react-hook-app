import React, { useState } from "react";

const HookClassCounter = () => {
  const [count, setCount] = useState(1);

  return (
    <div>
      <h3>Hook Class Counter</h3>
      <div>
        <button onClick={() => setCount(count + 1)}>Count {count}</button>
      </div>
    </div>
  );
};

export default HookClassCounter;
