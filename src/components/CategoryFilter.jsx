import React from 'react';

const CategoryFilter = ({ items, selectedCategory, onCategoryChange }) => {
  // Extract unique categories from items
  const categories = ['All', ...new Set(items.map(item => item.category))];

  return (
    <div className="flex items-center space-x-2">
      <label className="text-gray-700 font-medium">Filter by Category:</label>
      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="p-2 border rounded"
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;