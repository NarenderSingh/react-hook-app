import React from "react";
import ClassCounter from "./components/useState/ClassCounter";
import HookCounter from "./components/useState/HookCounter";
import HookCounter2 from "./components/useState/HookCounter2";
import HookCounter3 from "./components/useState/HookCounter3";
import HookCounter4 from "./components/useState/HookCounter4";
import ClassCounter1 from "./components/useEffect/ClassCounter1";
import HookCounter5 from "./components/useEffect/HookCounter5";
import HookCounter6 from "./components/useEffect/HookCounter6";

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
    </div>
  );
};

export default App;
