import React, { useState } from "react";

function ItemForm({ onAddItem }) {
  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    purpose: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = true;
    if (!formData.quantity) newErrors.quantity = true;
    if (!formData.purpose) newErrors.purpose = true;
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    onAddItem({
      id: crypto.randomUUID(),
      ...formData,
    });

    setFormData({ name: "", quantity: "", purpose: "" });
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Inventory Item</h2>

      <input
        name="name"
        placeholder="Item Name"
        value={formData.name}
        onChange={handleChange}
        className={errors.name ? "error" : ""}
      />

      <input
        name="quantity"
        type="number"
        placeholder="Quantity"
        value={formData.quantity}
        onChange={handleChange}
        className={errors.quantity ? "error" : ""}
      />

      <input
        name="purpose"
        placeholder="Purpose"
        value={formData.purpose}
        onChange={handleChange}
        className={errors.purpose ? "error" : ""}
      />

      <button type="submit">Add Item</button>
    </form>
  );
}

export default ItemForm;
