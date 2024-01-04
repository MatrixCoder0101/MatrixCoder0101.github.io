import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="bg-white p-8 rounded shadow-md w-full md:w-1/2">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600">Name</label>
          <input type="text" id="name" name="name" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600">Email</label>
          <input type="email" id="email" name="email" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-600">Message</label>
          <textarea id="message" name="message" rows="4" className="w-full p-2 border rounded"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
