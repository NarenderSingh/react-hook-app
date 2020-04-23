import React, { useContext } from "react";
import { CountContext, INCREMENT, DECREMENT, RESET } from "./AppReducerContext";

const ComponentD = () => {
  const countContext: any = useContext(CountContext);
  return (
    <div>
      <h2>Component D</h2>
      <hr />
      <button onClick={() => countContext.countDispatch({ type: INCREMENT })}>
        INCREMENT
      </button>
      <button onClick={() => countContext.countDispatch({ type: DECREMENT })}>
        DECREMENT
      </button>
      <button onClick={() => countContext.countDispatch({ type: RESET })}>
        RESET
      </button>
    </div>
  );
};

export default ComponentD;
