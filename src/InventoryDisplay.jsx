import React from "react";

import ItemCard from "./ItemCard";
import ItemAction from "./ItemAction";

function InventoryDisplay({ inventory, onDeleteItem }) {
  if (inventory.length === 0) {
    return <p>No items added yet.</p>;
  }

  return (
    <div>
      <h2>🧰 Inventory</h2>
      {inventory.map((item) => (
        <div key={item.id}>
          <ItemCard item={item} />
          <ItemAction onDelete={() => onDeleteItem(item.id)} />
        </div>
      ))}
    </div>
  );
}

export default InventoryDisplay;
