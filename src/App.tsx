import React from "react";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import HookCounter2 from "./components/HookCounter2";

const App = () => {
  return (
    <div className="App">
      <hr />
      <ClassCounter />
      <hr />
      <HookCounter />
      <hr/>
      <HookCounter2 />
    </div>
  );
};

export default App;
