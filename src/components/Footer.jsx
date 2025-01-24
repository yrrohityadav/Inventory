import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h3 className="text-xl font-bold">Inventory Management System</h3>
          <p className="text-sm text-gray-400">© 2024 All Rights Reserved</p>
        </div>
        <div className="space-x-4">
          <a href="#" className="hover:text-blue-300 text-sm">Privacy Policy</a>
          <a href="#" className="hover:text-blue-300 text-sm">Terms of Service</a>
          <a href="#" className="hover:text-blue-300 text-sm">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;