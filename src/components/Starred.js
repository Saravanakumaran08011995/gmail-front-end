import React, { useState, useEffect } from 'react';
import EmailItem from './EmailItem';
import axios from 'axios';

const Starred = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:9000/api/emails');
      setEmails(response.data);
    };

    fetchData();
  }, []);

  const handleUnstar = (id) => {
    setEmails(emails.map((email) => {
      if (email._id === id) {
        return { ...email, starred: false };
      }
      return email;
    }));
  };

  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h1 className="text-2xl font-medium mb-6">Starred</h1>
      <div className="bg-white shadow overflow-hidden rounded-md">
        {emails
          .filter((email) => email.starred)
          .map((email) => (
            <EmailItem
              key={email._id}
              email={email}
              onSelect={(id) => setEmails(emails.map((e) => (e._id === id ? { ...e, selected: !e.selected } : e)))}
              onStar={(id) => handleUnstar(id)}
              onDelete={(id) => setEmails(emails.filter((e) => e._id !== id))}
            />
          ))}
      </div>
    </div>
  );
};

export default Starred;