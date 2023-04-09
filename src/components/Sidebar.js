import { NavLink } from 'react-router-dom';
import { FiInbox, FiSend, FiPlus, FiStar } from 'react-icons/fi';

const Sidebar = ()=> {
  return (
    <div className="bg-gray-100 h-screen w-64 pt-5">
      <div className="px-4">
        <ul className="mt-2 leading-10">
          <li>
            <NavLink to="/compose">
              <div className="flex items-center py-1 hover:bg-gray-200">
                <FiPlus className="inline-block mr-2" /> 
                <span className="inline-block">Compose</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/inbox">
              <div className="flex items-center py-1 hover:bg-gray-200">
                <FiInbox className="inline-block mr-2" /> 
                <span className="inline-block">Inbox</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/starred">
              <div className="flex items-center py-1 hover:bg-gray-200">
                <FiStar className="inline-block mr-2" /> 
                <span className="inline-block">Starred</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/sent">
              <div className="flex items-center py-1 hover:bg-gray-200">
                <FiSend className="inline-block mr-2" /> 
                <span className="inline-block">Sent</span>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
