import React, { useState, useEffect } from "react";

const HookMouse = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    console.log("use mouse effect");
    window.addEventListener("mousemove", logMousePostion);

    return () => {
      window.removeEventListener("mousemove", logMousePostion);
    };
  }, []);

  const logMousePostion = (e: any) => {
    setX(() => e.clientX);
    setY(() => e.clientY);
  };

  return (
    <div>
      <h3>Hook Mouse Component - useEffect only once</h3>
      <div>
        <div>
          <p>
            x : {x} and y : {y}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HookMouse;
