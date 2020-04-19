import React, { useState } from "react";

interface IItem {
  id: number;
  value: number;
}

const HookCounter4 = () => {
  const initialItems: IItem[] = [];
  const [items, setItems] = useState(initialItems);

  const addItem = () => {
    const newItem: IItem = {
      id: items.length,
      value: Math.floor(Math.random() * 10) + 1,
    };

    setItems([...items, newItem]);
  };

  return (
    <div>
      <h3>Hook Component 4 - useState with Array</h3>
      <button onClick={addItem}>Add a random number</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}

        <h4>{JSON.stringify(items)}</h4>
      </ul>
    </div>
  );
};

export default HookCounter4;
