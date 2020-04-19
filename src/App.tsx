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

const App = () => {
  return (
    <div className="App">
      <hr />
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
    </div>
  );
};

export default App;
