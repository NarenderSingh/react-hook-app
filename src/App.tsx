import React from "react";
import ClassCounter from "./components/useState/ClassCounter";
import HookCounter from "./components/useState/HookCounter";
import HookCounter2 from "./components/useState/HookCounter2";
import HookCounter3 from "./components/useState/HookCounter3";
import HookCounter4 from "./components/useState/HookCounter4";
import ClassCounter1 from "./components/useEffect/class/ClassCounter1";
import HookCounter5 from "./components/useEffect/hook/HookCounter5";
import HookCounter6 from "./components/useEffect/hook/HookCounter6";
import ClassMouse from "./components/useEffect/class/ClassMount";
import MouseContainer from "./components/useEffect/hook/MouseContainer";
import IntervalHookCounter from "./components/useEffect/hook/IntervalHookCounter";
import DataFetching from "./components/useEffect/async/DataFetching";
import DataFetching1 from "./components/useEffect/async/DataFetching1";
import DataFetching2 from "./components/useEffect/async/DataFetching2";
import AppContext from "./components/useContext/App";
import ReducerCounterOne from "./components/useReducer/ReducerCounterOne";
import ReducerCounterTwo from "./components/useReducer/ReducerCounterTwo";
import ReducerCounterThree from "./components/useReducer/ReducerCounterThree";
import ReducerCounterFour from "./components/useReducer/ReducerCounterFour";
import AppReducerContext from "./components/useReducer/useReducerWithuseContext/AppReducerContext";
import AppUseCallback from "./components/useCallback/App";
import AppUseMemo from "./components/useMemo/App";
import FocusInput from "./components/useRef/FocusInput";
import RefTimerHook from "./components/useRef/RefTimerHook";

const App = () => {
  return (
    <div className="App">
      {/* <hr />
      <ClassCounter />
      <hr />
      <HookCounter />
      <hr />
      <HookCounter2 />
      <hr />
      <HookCounter3 />
      <hr />
      <HookCounter4 />
      <hr />
      <ClassCounter1 />
      <hr />
      <HookCounter5 />
      <hr />
      <HookCounter6 />
      <hr />
      <ClassMouse />
      <hr />
      <MouseContainer />
      <hr/>
      <IntervalHookCounter/> */}
      {/* <DataFetching /> */}
      {/* <DataFetching1 /> 
      {/* <DataFetching2 /> */}
      {/* <AppContext /> */}
      {/* <ReducerCounterOne /> */}
      {/* <ReducerCounterTwo /> */}
      {/* <ReducerCounterThree /> */}
      {/* <ReducerCounterFour /> */}
      {/* <AppReducerContext /> */}
      {/* <AppUseCallback /> */}
      {/* <AppUseMemo /> */}
      {/* <FocusInput /> */}
      <RefTimerHook />
    </div>
  );
};

export default App;
