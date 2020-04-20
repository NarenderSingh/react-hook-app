import React from "react";
import ComponentC from "./C";

export const UserContext = React.createContext("");
export const ChannelContext = React.createContext("");

const AppContext = () => (
  <div>
    <UserContext.Provider value={"Narender"}>
      <ChannelContext.Provider value={"Agreeya"}>
        <ComponentC />
      </ChannelContext.Provider>
    </UserContext.Provider>
  </div>
);

export default AppContext;
