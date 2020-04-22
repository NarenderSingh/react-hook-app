import React, { useReducer } from "react";
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const INCREMENT2 = "INCREMENT2";
const DECREMENT2 = "DECREMENT2";
const RESET = "RESET";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};

const reducer = (state: any, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case INCREMENT:
      return { ...state, firstCounter: state.firstCounter + payload };
    case DECREMENT:
      return { ...state, firstCounter: state.firstCounter - payload };
    case INCREMENT2:
      return { ...state, secondCounter: state.secondCounter + payload };
    case DECREMENT2:
      return { ...state, secondCounter: state.secondCounter - payload };
    case RESET:
      return initialState;
    default:
      return state;
  }
};

const ReducerCounterThree = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h3>Reducer Counter Three</h3>
      <hr />
      <h4>First Counter : {state.firstCounter}</h4>
      <h4>Second Counter : {state.secondCounter}</h4>
      <div>
        <div>
          <button onClick={() => dispatch({ type: INCREMENT, payload: 1 })}>
            Increment
          </button>
          <button onClick={() => dispatch({ type: DECREMENT, payload: 1 })}>
            Decrement
          </button>
          <button onClick={() => dispatch({ type: INCREMENT, payload: 5 })}>
            Increment 5
          </button>
          <button onClick={() => dispatch({ type: DECREMENT, payload: 5 })}>
            Decrement 5
          </button>
        </div>
        <hr />
        <div>
          <button onClick={() => dispatch({ type: INCREMENT2, payload: 1 })}>
            Increment Second Counter
          </button>
          <button onClick={() => dispatch({ type: DECREMENT2, payload: 1 })}>
            Decrement Second Counter
          </button>
        </div>
        <hr />
        <div>
          <button onClick={() => dispatch({ type: RESET })}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default ReducerCounterThree;
