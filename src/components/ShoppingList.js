import PackingList from "./PackingList";
import Form from "./Form";
import Stats from "./Stats";

function ShoppingList({
  onAddItems,
  items,
  onDeleteItem,
  onToggleItem,
  haddleClearList,
}) {
  return (
    <div className="shopping-box">
      {" "}
      <Form onAddItems={onAddItems} />
      <PackingList
        items={items}
        onDeleteItem={onDeleteItem}
        onToggleItem={onToggleItem}
        haddleClearList={haddleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default ShoppingList;
