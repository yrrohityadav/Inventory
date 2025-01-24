import React from 'react';

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">About Inventory Management System</h1>
      
      <section className="bg-white shadow-md rounded-lg p-8 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700">
          To provide businesses with a powerful, easy-to-use inventory management solution 
          that helps optimize stock levels, reduce costs, and improve operational efficiency.
        </p>
      </section>
      
      <section className="bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Real-time inventory tracking</li>
          <li>Detailed reporting and analytics</li>
          <li>User-friendly interface</li>
          <li>Secure and scalable platform</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutPage;