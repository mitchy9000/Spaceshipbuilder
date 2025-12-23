import React, { useState } from "react";
import ItemForm from "./ItemForm";
import InventoryDisplay from "./InventoryDisplay";

function SpacecraftBuilder() {
  const [inventory, setInventory] = useState([]);

  const addItem = (item) => {
    setInventory((prev) => [...prev, item]);
  };

  const deleteItem = (id) => {
    setInventory((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>🚀 Spacecraft Builder</h1>
      <ItemForm onAddItem={addItem} />
      <InventoryDisplay inventory={inventory} onDeleteItem={deleteItem} />
    </div>
  );
}

export default SpacecraftBuilder;
