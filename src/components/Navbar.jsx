import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-blue-200">Inventory App</Link>
        </div>
        <div className="space-x-4">
          <Link to="/" className="hover:text-blue-200">Home</Link>
          <Link to="/inventory" className="hover:text-blue-200">Inventory</Link>
          <Link to="/profile" className="hover:text-blue-200">Profile</Link>
          <Link to="/about" className="hover:text-blue-200">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;