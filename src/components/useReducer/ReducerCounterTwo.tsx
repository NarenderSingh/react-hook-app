import React, { useReducer } from "react";
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

const initialState = {
  firstCounter: 0,
};

const reducer = (state: any, action: any) => {
  const { type } = action;

  switch (type) {
    case INCREMENT:
      return { ...state, firstCounter: state.firstCounter + 1 };
    case DECREMENT:
      return { ...state, firstCounter: state.firstCounter + 1 };
    case RESET:
      return initialState;
    default:
      return state;
  }
};

const ReducerCounterTwo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h3>Reducer Counter Two</h3>
      {state.firstCounter}
      <div>
        <button onClick={() => dispatch({ type: INCREMENT })}>Increment</button>
        <button onClick={() => dispatch({ type: DECREMENT })}>Decrement</button>
        <button onClick={() => dispatch({ type: RESET })}>Reset</button>
      </div>
    </div>
  );
};

export default ReducerCounterTwo;
