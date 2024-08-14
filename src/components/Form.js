import { useState } from "react";

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <>
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>My To Do List:</h3>
        <p>
          What's Missing? You still have some things to buy for the party... Add
          them to your Shopping list.
        </p>
        <div className="add--form">
          <div className="add--form-quantity">
            <select
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            >
              {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                <option value={num} key={num}>
                  {num}
                </option>
              ))}
            </select>
            <img
              className="arrow-down"
              src="./assets/svg/chevron-down-outline.svg"
              alt=""
            />
          </div>
          <input
            type="text"
            placeholder="Type your item..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button>Add</button>
        </div>
      </form>
    </>
  );
}

export default Form;
