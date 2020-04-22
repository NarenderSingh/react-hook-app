import React, { useReducer } from "react";
const INCREMENT_FIRST_COUNTER = "INCREMENT_FIRST_COUNTER";
const DECREMENT_FIRST_COUNTER = "DECREMENT_FIRST_COUNTER";
const INCREMENT_SECOND_COUNTER = "INCREMENT_SECOND_COUNTER";
const DECREMENT_SECOND_COUNTER = "DECREMENT2_SECOND_COUNTER";
const RESET = "RESET";

const firstCounterInitialState = {
  firstCounter: 0,
};

const secoundCounterInitialState = {
  secondCounter: 10,
};

const firstCounterReducer = (state: any, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case INCREMENT_FIRST_COUNTER:
      return { ...state, firstCounter: state.firstCounter + payload };
    case DECREMENT_FIRST_COUNTER:
      return { ...state, firstCounter: state.firstCounter - payload };
    case RESET:
      return firstCounterInitialState;
    default:
      return state;
  }
};

const secoundCounterReducer = (state: any, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case INCREMENT_SECOND_COUNTER:
      return { ...state, secondCounter: state.secondCounter + payload };
    case DECREMENT_SECOND_COUNTER:
      return { ...state, secondCounter: state.secondCounter - payload };
    case RESET:
      return secoundCounterInitialState;
    default:
      return state;
  }
};

const ReducerCounterFour = () => {
  const [firstCounterState, firstCounterDispatch] = useReducer(
    firstCounterReducer,
    firstCounterInitialState
  );

  const [secoundCounterState, secondCounterDispatch] = useReducer(
    secoundCounterReducer,
    secoundCounterInitialState
  );

  return (
    <div>
      <h3>Reducer Counter Four</h3>
      <hr />
      <h4>First Counter : {firstCounterState.firstCounter}</h4>
      <h4>Second Counter : {secoundCounterState.secondCounter}</h4>
      <div>
        <div>
          <button
            onClick={() =>
              firstCounterDispatch({
                type: INCREMENT_FIRST_COUNTER,
                payload: 1,
              })
            }
          >
            First Counter Increment
          </button>
          <button
            onClick={() =>
              firstCounterDispatch({
                type: DECREMENT_FIRST_COUNTER,
                payload: 1,
              })
            }
          >
            First Counter Decrement
          </button>
          <button onClick={() => firstCounterDispatch({ type: RESET })}>
            Reset
          </button>
        </div>
        <hr />
        <div>
          <button
            onClick={() =>
              secondCounterDispatch({
                type: INCREMENT_SECOND_COUNTER,
                payload: 1,
              })
            }
          >
            Increment Second Counter
          </button>
          <button
            onClick={() =>
              secondCounterDispatch({
                type: DECREMENT_FIRST_COUNTER,
                payload: 1,
              })
            }
          >
            Decrement Second Counter
          </button>
          <button onClick={() => secondCounterDispatch({ type: RESET })}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReducerCounterFour;
