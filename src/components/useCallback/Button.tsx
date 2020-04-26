import React from "react";

interface IButtonProps {
  handleClick: any;
  children?: string;
}

const Button = (props: IButtonProps) => {
  const { handleClick, children } = props;

  console.log(`Rendering button ${children}`);
  return (
    <div>
      <button type="button" onClick={handleClick}>
        {children}
      </button>
    </div>
  );
};

export default React.memo(Button);
