import React from "react";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import HookCounter2 from "./components/HookCounter2";
import HookCounter3 from "./components/HookCounter3";
import HookCounter4 from "./components/HookCounter4";

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
    </div>
  );
};

export default App;
