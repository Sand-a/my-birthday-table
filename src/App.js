import { useState } from "react";
import { decosData } from "./components/decosData";
import Table from "./components/Table";
import Logo from "./components/Logo";
import DecorationList from "./components/DecorationList";
import Footer from "./components/Footer";
import ShoppingList from "./components/ShoppingList";

export default function App() {
  const [items, setItems] = useState([]);
  const [images, setImages] = useState([]);

  function handleDeleteItem(id) {
    setItems((items) => items.filter((i) => i.id !== id));
  }

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "All Items will be deleted from your Shopping List..."
    );
    if (confirmed) setItems([]);
  }

  function handleImageChange(id, illustration, a) {
    setImages((prevImages) => {
      const newImages = [...prevImages];
      const index = newImages.findIndex((img) => img.id === id);
      if (index !== -1) {
        newImages[index].illustration = illustration;
      } else {
        newImages.push({ id, illustration, a });
      }
      return newImages;
    });
  }

  return (
    <div className="app">
      <div className="app-grid container">
        <div className="deco-section">
          <Logo />

          <DecorationList
            itemsDeco={decosData}
            handleImageChange={handleImageChange}
          />
          <div></div>
          <Table images={images} />
        </div>
        <ShoppingList
          onAddItems={handleAddItems}
          items={items}
          onDeleteItem={handleDeleteItem}
          onToggleItem={handleToggleItem}
          handleClearList={handleClearList}
        />
      </div>
      <Footer />
    </div>
  );
}
