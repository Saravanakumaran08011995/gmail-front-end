import React from 'react';
import { FaSearch, FaCog } from 'react-icons/fa';
import profilePhoto from '../assets/profile-photo.png';
import gmailIcon from '../assets/gmail-icon.png';
import '../App.css';

const Header = () => {
  return (
  <div class="flex flex-col p-4 bg-white shadow">
  <div class="flex items-center justify-between mb-4">
    <div class="flex items-center">
      <img class="w-8 h-8 mr-4" src={gmailIcon} alt="Gmail" />
      <h1 class="text-lg font-bold">Gmail</h1>
    </div>
    <div class="flex items-center">
      <FaCog class="text-gray-600 mr-4" />
      <img class="w-8 h-8 rounded-full" src={profilePhoto} alt="Profile" />
    </div>
  </div>
  <div class="relative mb-4">
    <FaSearch class="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-600" />
    <input class="border border-gray-400 p-2 rounded-md text-gray-600 focus:outline-none focus:border-blue-500 pl-10 w-full" type="text" placeholder="Search mail" />
  </div>
</div>

  );
}

export default Header;
