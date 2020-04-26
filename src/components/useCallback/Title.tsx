import React from "react";

const Title = () => {
  console.log("Rendering Title");
  return (
    <div>
      <h4>App Hook Title</h4>
    </div>
  );
};

export default React.memo(Title);
