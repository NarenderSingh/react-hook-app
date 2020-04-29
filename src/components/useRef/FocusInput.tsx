import React, { useEffect, useRef } from "react";

const FocusInput = () => {
  const inputRef: any = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default FocusInput;
