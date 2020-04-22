import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state: any, action: any) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const ReducerCounterOne = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h3>Reducer Counter One</h3>
      {count}
      <div>
        <button onClick={() => dispatch("increment")}>Increment</button>
        <button onClick={() => dispatch("decrement")}>Decrement</button>
        <button onClick={() => dispatch("reset")}>Reset</button>
      </div>
    </div>
  );
};

export default ReducerCounterOne;
