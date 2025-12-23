import React from "react";

function ItemAction({ onDelete }) {
  return <button onClick={onDelete}>🗑️ Delete</button>;
}

export default ItemAction;
