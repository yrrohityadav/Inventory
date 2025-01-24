import React, { useState } from 'react';
import AddItemModal from './AddItemModal';
import EditItemModal from './EditItemModal';

const InventoryTable = ({ items, onUpdateItem, onDeleteItem, onAddItem }) => {
  const [editingItem, setEditingItem] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [sortConfig, setSortConfig] = useState({ key: 'quantity', direction: 'ascending' });
  const [filterCategory, setFilterCategory] = useState('All');

  // Get unique categories
  const categories = ['All', ...new Set(items.map((item) => item.category))];

  // Sorting function
  const sortedItems = [...items]
    .filter((item) => filterCategory === 'All' || item.category === filterCategory)
    .sort((a, b) => {
      const order = sortConfig.direction === 'ascending' ? 1 : -1;
      if (a[sortConfig.key] < b[sortConfig.key]) return -1 * order;
      if (a[sortConfig.key] > b[sortConfig.key]) return 1 * order;
      return 0;
    });

  // Stock color determination
  const getStockColor = (quantity) => {
    if (quantity < 10) return 'bg-red-100 text-red-800 font-bold';
    if (quantity < 20) return 'bg-yellow-100 text-yellow-800';
    return 'bg-green-100 text-green-800';
  };

  // Sorting handler
  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div>
      <div className="flex justify-between mb-4">
        <div className="flex items-center space-x-4">
          <label className="font-medium">Category:</label>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="p-2 border rounded"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add New Item
        </button>
      </div>

      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            {['name', 'category', 'quantity', 'price'].map((key) => (
              <th
                key={key}
                onClick={() => requestSort(key)}
                className="px-4 py-3 text-left cursor-pointer hover:bg-gray-300 capitalize"
              >
                {key} {sortConfig.key === key && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
              </th>
            ))}
            <th className="px-4 py-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedItems.map((item) => (
            <tr key={item.id} className="border-b hover:bg-gray-50">
              <td className="px-4 py-3">{item.name}</td>
              <td className="px-4 py-3">{item.category}</td>
              <td className={`px-4 py-3 ${getStockColor(item.quantity)}`}>{item.quantity}</td>
              <td className="px-4 py-3">${item.price.toFixed(2)}</td>
              <td className="px-4 py-3 text-center space-x-2">
                <button
                  onClick={() => setEditingItem(item)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDeleteItem(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isAddModalOpen && (
        <AddItemModal
          onClose={() => setIsAddModalOpen(false)}
          onAddItem={(newItem) => {
            onAddItem(newItem);
            setIsAddModalOpen(false);
          }}
        />
      )}

      {editingItem && (
        <EditItemModal
          item={editingItem}
          onClose={() => setEditingItem(null)}
          onUpdateItem={(updatedItem) => {
            onUpdateItem(updatedItem);
            setEditingItem(null);
          }}
        />
      )}
    </div>
  );
};

export default InventoryTable;
