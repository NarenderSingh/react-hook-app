import React, { useContext } from "react";
import { UserContext, ChannelContext } from "./App";

const UseContextHook = () => {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);

  return (
    <div>
      {user} {channel}
    </div>
  );
};

export default UseContextHook;
