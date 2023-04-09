import React, { useState } from 'react';
import axios from 'axios';

const ComposeMail = () => {
  const [formData, setFormData] = useState({
    sender: '',
    to: '',
    subject: '',
    text: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // First, send the email using nodemailer
      await axios.post('https://saravana-kumaran-gmail-backend.vercel.app/api/send-email', formData);
  
      // Then, save the email to the database
      await axios.post('https://saravana-kumaran-gmail-backend.vercel.app/api/save-email', formData);
  
      // Display a success message to the user
      alert('Mail sent successfully and saved to the database');
  
      // Clear the form data
      setFormData({
        sender: '',
        to: '',
        subject: '',
        text: ''
      });
    } catch (error) {
      console.error(error);
      alert('An error occurred while sending the mail');
    } 
  };
    

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Compose Mail</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col">
          <label htmlFor="sender" className="text-lg font-medium mb-2">Sender:</label>
          <input type="email" id="sender" name="sender" required value={formData.sender} onChange={handleInputChange} className="px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="to" className="text-lg font-medium mb-2">To:</label>
          <input type="email" id="to" name="to" required value={formData.to} onChange={handleInputChange} className="px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="subject" className="text-lg font-medium mb-2">Subject:</label>
          <input type="text" id="subject" name="subject" required value={formData.subject} onChange={handleInputChange} className="px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="text" className="text-lg font-medium mb-2">Message:</label>
          <textarea id="text" name="text" required value={formData.text} onChange={handleInputChange} className="px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
        </div>
        <button type="submit" className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50">Send</button>
      </form>
    </div>
  );
};

export default ComposeMail;

