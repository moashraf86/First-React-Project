import React from "react";
import "./styles.css";

//[ 2 ] class based component
const allItems = [
  { key: "0", value: "task one" },
  { key: "1", value: "task two" },
  { key: "2", value: "task three" },
  { key: "3", value: "task four" }
];

function App() {
  const [items, setItemsState] = React.useState(allItems);

  //add item
  function addItem() {
    setItemsState([...items, allItems.find((i) => !items.includes(i))]);
  }

  //Remove item
  function removeItem(item) {
    setItemsState(items.filter((i) => i !== item));
  }

  //line through
  return (
    <div className="App">
      <button disabled={items.length >= allItems.length} onClick={addItem}>
        add item
      </button>
      <ul style={{ listStyle: "none", padding: "0" }}>
        {items.map((item) => (
          <i key={item.key} style={{ display: "block" }}>
            <button onClick={() => removeItem(item)}>Remove</button>
            <input id={item.key} type="checkbox" />
            <label htmlFor={item.key}>{item.value}</label>
          </i>
        ))}
      </ul>
    </div>
  );
}

export default App;
