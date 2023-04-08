import React from 'react';
import { FaSearch, FaCog } from 'react-icons/fa';
import profilePhoto from '../assets/profile-photo.png';
import gmailIcon from '../assets/gmail-icon.png';

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow">
      <div className="flex items-center">
      <div className="flex items-center">
           <img className="w-8 h-8 mr-4" src={gmailIcon} alt="Gmail" />
            <h1 className="text-lg font-bold">Gmail</h1>
      </div>

       
        <div className="relative ml-40">
          <FaSearch className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-600" />
          <input
            className="border border-gray-400 p-2 rounded-md text-gray-600 focus:outline-none focus:border-blue-500 pl-10 w-[700px]"
            type="text"
            placeholder="Search mail"
          />
        </div>
      </div>
      <div className="flex items-center">
        <FaCog className="text-gray-600 mr-4" />
        <img className="w-8 h-8 rounded-full" src={profilePhoto} alt="Profile" />
      </div>
    </div>
  );
}

export default Header;
