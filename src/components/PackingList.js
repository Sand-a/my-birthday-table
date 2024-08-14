import { useState } from "react";
import Item from "./Item";

function PackingList({ items, onDeleteItem, onToggleItem, handleClearList }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <>
      <div className="list">
        <img src="./assets/svg/binding.svg" alt="" />
        <ul>
          {sortedItems.map((item) => (
            <Item
              item={item}
              key={item.id}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
            />
          ))}
        </ul>
      </div>
      <div className="actions">
        <div className="actions-selection">
          <select
            value={sortBy}
            onChange={(e) => {
              setSortBy(e.target.value);
            }}
          >
            <option value="input">Initial List Input</option>
            <option value="description">Alphabetical Order</option>
            <option value="packed">REST To Do </option>
          </select>
          <img
            className="arrow-down"
            src="./assets/svg/chevron-down-outline.svg"
            alt=""
          />
        </div>
        <button onClick={() => handleClearList()}>Clear List</button>
      </div>
    </>
  );
}

export default PackingList;
