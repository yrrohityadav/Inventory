import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to Inventory Management</h1>
      <p className="text-xl text-gray-600 mb-8">
        Streamline your inventory tracking with our comprehensive solution
      </p>
      
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Inventory</h2>
          <p className="mb-4">Manage and track your product inventory in real-time</p>
          <Link 
            to="/inventory" 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            View Inventory
          </Link>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Profile</h2>
          <p className="mb-4">View and update your personal account information</p>
          <Link 
            to="/profile" 
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            View Profile
          </Link>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Reports</h2>
          <p className="mb-4">Generate comprehensive inventory reports</p>
          <button 
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
          >
            Generate Reports
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;