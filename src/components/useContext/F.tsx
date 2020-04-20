import React from "react";
import { UserContext, ChannelContext } from "./App";

const ComponentF = () => (
  <div>
    <h3>Component F</h3>
    <UserContext.Consumer>
      {(user) => {
        return (
          <ChannelContext.Consumer>
            {(channel) => {
              return (
                <div>
                  <p>
                    User context value = {user}, Channel context value ={" "}
                    {channel}
                  </p>
                </div>
              );
            }}
          </ChannelContext.Consumer>
        );
      }}
    </UserContext.Consumer>
  </div>
);

export default ComponentF;
