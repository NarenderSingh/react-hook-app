import React from "react";

interface ICount {
  text: string;
  count: number;
}

const Count = (props: ICount) => {
  const { text, count } = props;

  console.log(`Rendering ${text}`);
  return (
    <div>
      {text} - {count}
    </div>
  );
};

export default React.memo(Count);
