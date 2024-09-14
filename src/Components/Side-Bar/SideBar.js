import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './SideBar.css';
import { RoomSelect } from '../RoomSelect/RoomSelect';
import { FloorSelect } from '../FloorSelect/FloorSelect';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      {/* Navbar for large screens */}
      {/* <nav id="navbar" className="navbar navbar-expand-lg bg-light d-none d-md-flex w-100">
  <div className="container-fluid">
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link to="/" className={`nav-link text-dark ${location.pathname === '/' ? 'active' : ''}`}>
            <i className="bi bi-speedometer2 me-2"></i>
            Dashboard
          </Link>
        </li>

        <li className="nav-item dropdown">
          <div className="nav-link text-dark dropdown-toggle" onClick={handleDropdownToggle}>
            <i className="bi bi-file-earmark-text me-2"></i>
            Pages
          </div>
          <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
            <li>
              <Link to="/temperaturePage" className={`dropdown-item ${location.pathname === '/temperaturePage' ? 'active' : ''}`}>
                <i className="bi bi-thermometer-half me-2"></i>
                Temperature Page
              </Link>
            </li>
            <li>
              <Link to="/aqiPage" className={`dropdown-item ${location.pathname === '/aqiPage' ? 'active' : ''}`}>
                <i className="bi bi-cloud-fog2-fill me-2"></i>
                AQI Page
              </Link>
            </li>
            <li>
              <Link to="/humidityPage" className={`dropdown-item ${location.pathname === '/humidityPage' ? 'active' : ''}`}>
                <i className="bi bi-droplet-fill me-2"></i>
                Humidity Page
              </Link>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <FloorSelect />
        </li>
        <li className="nav-item">
          <RoomSelect />
        </li>
      </ul>
    </div>
  </div>
</nav> */}


      {/* Sidebar for small screens */}
      <div className={`d-md-none d-flex ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <nav id="sidebar" className={`sidebar ${isOpen ? 'open' : ''}`}>
          <div className="sidebar-content">
            <Link to="/" className="d-flex align-items-center justify-content-center fs-4 p-3 text-dark text-decoration-none">
              <div className="logoDiv d-flex align-items-center">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/dash-logo.png`}
                  alt="Dashboard Logo"
                  width="120"
                  height="50"
                  className="me-2"
                />
              </div>
            </Link>

            <hr className="dropdown-divider" style={{ borderTop: '1px solid #ccc' }} />
            <ul className="nav flex-column mt-2 mb-auto">
              <li className="nav-item">
                <Link to="/" className={`nav-link text-dark ${location.pathname === '/' ? 'active' : ''}`}>
                  <i className="bi bi-speedometer2 me-2"></i>
                  Dashboard
                </Link>
              </li>
  
              <li className="nav-item dropdown">
                <div className="nav-link text-dark dropdown-toggle" onClick={handleDropdownToggle}>
                  <i className="bi bi-file-earmark-text me-2"></i>
                  Pages
                </div>
                <div className={`dropdown-menu-container ${isDropdownOpen ? 'open' : ''}`}>
                  <ul className="dropdown-menu-custom">
                    <li>
                      <Link to="/temperaturePage" className={`dropdown-item-custom ${location.pathname === '/temperaturePage' ? 'active' : ''}`}>
                        <i className="bi bi-thermometer-half me-2"></i>
                        Temperature Page
                      </Link>
                    </li>
                    <li>
                      <Link to="/aqiPage" className={`dropdown-item-custom ${location.pathname === '/aqiPage' ? 'active' : ''}`}>
                        <i className="bi bi-cloud-fog2-fill me-2"></i>
                        AQI Page
                      </Link>
                    </li>
                    <li>
                      <Link to="/humidityPage" className={`dropdown-item-custom ${location.pathname === '/humidityPage' ? 'active' : ''}`}>
                        <i className="bi bi-droplet-fill me-2"></i>
                        Humidity Page
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
  
              <li className="nav-item">
                <FloorSelect />
              </li>
              <li className="nav-item">
                <RoomSelect />
              </li>
              
              <li><hr className="dropdown-divider" style={{ margin: '10px 0px ', borderTop: '1px solid #ccc' }} /></li>
  <ul className="list-unstyled ms-3" style={{textDecoration:'none'}}>
    <li className="text-dark d-flex align-items-center py-2">
        <i className="bi bi-plus-circle me-2"></i> {/* New Project Icon */}
        New project...
    </li>
    <li className="text-dark d-flex align-items-center py-2">
        <i className="bi bi-gear-fill me-2"></i> {/* Settings Icon */}
        Settings
    </li>
    <li className="text-dark d-flex align-items-center py-2">
        <i className="bi bi-person-fill me-2"></i> {/* Profile Icon */}
        Profile
    </li>
    <li><hr className="dropdown-divider" style={{ margin: '10px 0px ', borderTop: '1px solid #ccc' }} /></li>

    <li className="text-dark d-flex align-items-center py-2">
        <i className="bi bi-box-arrow-right me-2"></i> {/* Sign Out Icon */}
        Sign out
    </li>
  </ul>
            </ul>
          </div>
        </nav>
  
        <button
          className="sidebar-toggle btn"
          onClick={toggleSidebar}
          aria-controls="sidebar"
          aria-expanded={isOpen}
        >
          <i className={`bi bi-list toggle-icon ${isOpen ? 'open' : ''}`}></i>
          <span className="visually-hidden">Toggle sidebar</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
