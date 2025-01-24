import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import InventoryTable from './components/InventoryTable';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import AboutPage from './pages/AboutPage';

const App = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Laptop', category: 'Electronics', quantity: 15, price: 1000 },
    { id: 2, name: 'Desk Chair', category: 'Furniture', quantity: 8, price: 250 },
    { id: 3, name: 'Coffee Maker', category: 'Appliances', quantity: 20, price: 100 }
  ]);

  // Add a new item to the inventory
  const addItem = (newItem) => {
    setItems([...items, { ...newItem, id: Date.now() }]); // Use Date.now() for unique IDs
  };

  // Update an existing item's details
  const updateItem = (updatedItem) => {
    setItems(items.map(item => 
      item.id === updatedItem.id ? updatedItem : item
    ));
  };

  // Delete an item from the inventory
  const deleteItem = (itemId) => {
    setItems(items.filter(item => item.id !== itemId));
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />
        
        {/* Main Content */}
        <main className="flex-grow container mx-auto px-4 py-6">
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<HomePage />} />
            
            {/* Inventory Page */}
            <Route 
              path="/inventory" 
              element={
                <InventoryTable 
                  items={items}                // Pass inventory items
                  onAddItem={addItem}          // Handle adding new items
                  onUpdateItem={updateItem}    // Handle editing items
                  onDeleteItem={deleteItem}    // Handle deleting items
                />
              } 
            />
            
            {/* Profile Page */}
            <Route path="/profile" element={<ProfilePage />} />
            
            {/* About Page */}
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
