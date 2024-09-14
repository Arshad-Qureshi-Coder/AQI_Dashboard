import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const YouTubeSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        <i className={`bi ${isCollapsed ? 'bi-list' : 'bi-x'}`}></i>
      </div>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <i className="bi bi-house-door"></i>
            <span className="nav-link-text">Home</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/explore" className="nav-link">
            <i className="bi bi-compass"></i>
            <span className="nav-link-text">Explore</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/subscriptions" className="nav-link">
            <i className="bi bi-collection-play"></i>
            <span className="nav-link-text">Subscriptions</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/library" className="nav-link">
            <i className="bi bi-folder"></i>
            <span className="nav-link-text">Library</span>
          </Link>
        </li>
        {/* Add more items as needed */}
      </ul>
    </div>
  );
};

export default YouTubeSidebar;
