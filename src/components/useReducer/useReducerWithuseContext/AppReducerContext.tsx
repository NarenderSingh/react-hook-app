import React, { useReducer } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";

export const CountContext = React.createContext({});

const initialCountState = {
  count: 0,
};

const countReducer = (state: any, action: any) => {
  const { type } = action;

  switch (type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return initialCountState;
    default:
      return state;
  }
};

const AppReducerContext = () => {
  const [countState, countDispatch] = useReducer(
    countReducer,
    initialCountState
  );

  return (
    <div>
      <h2>App Context</h2>
      <hr />
      <span>{countState.count}</span>
      <hr />
      <CountContext.Provider
        value={{ countState: countState, countDispatch: countDispatch }}
      >
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider>
    </div>
  );
};

export default AppReducerContext;
