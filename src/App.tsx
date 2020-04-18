import React from "react";
import ClassCounter from "./components/ClassCounter";
import HookClassCounter from "./components/HookClassCounter";

const App = () => {
  return (
    <div className="App">
      <hr />
      <ClassCounter />
      <hr />
      <HookClassCounter />
    </div>
  );
};

export default App;
