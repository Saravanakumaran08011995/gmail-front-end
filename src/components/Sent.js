import { useState } from 'react';

const Sent = () => {
  const [emails, setEmails] = useState([
    {
      id: 1,
      recipient: 'example1@gmail.com',
      subject: 'Meeting Notes',
      date: '2022-04-05',
      preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...'
    },
    {
      id: 2,
      recipient: 'example2@gmail.com',
      subject: 'Sales Report',
      date: '2022-04-03',
      preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...'
    },
    {
      id: 3,
      recipient: 'example3@gmail.com',
      subject: 'Project Update',
      date: '2022-03-28',
      preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...'
    },
  ]);

  return (
    <div className="flex flex-col h-screen overflow-y-hidden">
      <div className="mx-auto max-w-7xl pt-8 pb-4 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Sent</h1>
      </div>
      <div className="flex-grow overflow-y-auto">
        <div className="mx-auto max-w-7xl pb-12 px-4 sm:px-6 lg:px-8">
          <div className="mt-8">
            <div className="flow-root">
              <ul className="-my-5 divide-y divide-gray-200">
                {emails.map((email) => (
                  <li key={email.id} className="py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{email.recipient}</p>
                        <p className="text-sm text-gray-500 truncate">{email.subject}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{email.date}</p>
                      </div>
                    </div>
                    <div className="mt-2 sm:flex sm:justify-between">
                      <p className="mt-1 text-sm text-gray-600">{email.preview}</p>
                      <a href="#" className="mt-2 text-sm font-medium text-blue-600 sm:mt-0 sm:ml-4">View</a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sent;
