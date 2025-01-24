import React, { useState } from 'react';

const EditItemModal = ({ item, onClose, onUpdateItem }) => {
  const [editedItem, setEditedItem] = useState(item);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateItem({
      ...editedItem,
      quantity: parseInt(editedItem.quantity),
      price: parseFloat(editedItem.price)
    });
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedItem(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-xl w-96">
        <h2 className="text-2xl font-bold mb-4">Edit Item</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Item Name"
            value={editedItem.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <select
            name="category"
            value={editedItem.category}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          >
            <option value="Electronics">Electronics</option>
            <option value="Furniture">Furniture</option>
            <option value="Appliances">Appliances</option>
          </select>
          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={editedItem.quantity}
            onChange={handleChange}
            required
            min="0"
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={editedItem.price}
            onChange={handleChange}
            required
            min="0"
            step="0.01"
            className="w-full p-2 border rounded"
          />
          <div className="flex justify-between">
            <button 
              type="button" 
              onClick={onClose}
              className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Update Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditItemModal;