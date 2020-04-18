import React, { useState } from "react";

interface IEmployee {
  firstName: string;
  lastName: string;
}

const HookCounter3 = () => {
  const employee: IEmployee = {
    firstName: "John",
    lastName: "Doe",
  };

  const [name, setName] = useState(employee);

  return (
    <div>
      <h3>Hook Component 3 - useState with Object</h3>
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        <h4>Your Firstname : {name.firstName}</h4>
        <h4>Your Last name : {name.lastName}</h4>
        <h4>{JSON.stringify(name)}</h4>
      </form>
    </div>
  );
};

export default HookCounter3;
