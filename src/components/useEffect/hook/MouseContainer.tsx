import React, { useState } from "react";
import HookMouse from "./HookMouse";

const MouseContainer = () => {
  const [display, setDisplay] = useState(false);

  return (
    <div>
      <h4>Hook Mouse Container for toggle</h4>
      <button onClick={() => setDisplay(!display)}>
        Toggle Mouse Container - {JSON.stringify(display)}
      </button>
      {display && <HookMouse />}
    </div>
  );
};

export default MouseContainer;
