import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { RoomSelect } from '../RoomSelect/RoomSelect';
import { FloorSelect } from '../FloorSelect/FloorSelect';
import './Header.css';
import { DashboardContext } from '../DashboardUseContext/DashboardProvider';
import DatePicker from 'react-datepicker';

export function Header() {
  // const {startDate, setStartDate, endDate, setEndDate} = useContext(DashboardContext)
  
  return (
    <div>
    <nav className="navbar nav-b1 d-flex">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <div className="logoDiv d-flex align-items-center">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/dash-logo.png`}
              alt="Dashboard Logo"
              width="120"
              height="50"
              className="me-2"
            />
          </div>
        </a>
        {/* <div className="date">
  <div className="mb-3">
    <p>From:</p>
    <div className="input-group date-picker">
      <DatePicker className="form-control" selected={startDate} onChange={(date) => setStartDate(date)} />
      <span className="input-group-text">
        <i className="bi bi-calendar" style={{ color: '#3576ad' }}></i>
      </span>
    </div>
  </div>
  
  <div className="mb-3">
    <p>To:</p>
    <div className="input-group date-picker">
      <DatePicker className="form-control" selected={endDate} onChange={(date) => setEndDate(date)} />
      <span className="input-group-text">
        <i className="bi bi-calendar" style={{ color: '#3576ad' }}></i>
      </span>
    </div>
  </div>
</div> */}

        {/* <li> */}
        <div className='d-flex px-3 ' >
              <a className="dropdown-item d-flex align-items-center" href="#">
                <i className="bi bi-gear-fill me-2 "></i> {/* Settings Icon */}
                {/* Settings */}
              </a>
            {/* </li> */}
        {/* <h5 className="title text-center flex-grow-1 m-0">{data?.name}</h5> */}
        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center text-dark text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="bi bi-person-circle me-2  "></i> {/* Profile Icon */}
            {/* <strong>Username</strong> */}
          </a>
          <ul
            className="dropdown-menu dropdown-menu-end shadow"
            aria-labelledby="dropdownUser1"
          >
            <li>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <i className="bi bi-plus-circle "></i> {/* New Project Icon */}
                New project...
              </a>
            </li>
            {/* <li>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <i className="bi bi-gear-fill me-2"></i> 
                Settings
              </a>
            </li> */}
            <li>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <i className="bi bi-person-fill me-2"></i> {/* Profile Icon */}
                Profile
              </a>
            </li>
            <li><hr className="dropdown-divider" /></li>
            <li>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <i className="bi bi-box-arrow-right me-2"></i> {/* Sign Out Icon */}
                Sign out
              </a>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </nav>
  </div>
  
);

}

export const HeaderSecond =() => {
  const {startDate, setStartDate, endDate, setEndDate} = useContext(DashboardContext)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const location = useLocation();

  

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };



  return(
    <>
     <nav id="navbar" className="navbar navbar-expand-lg ">
  <div className="">
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item px-5">
          <Link to="/" className={`nav-link text-dark ${location.pathname === '/' ? 'active' : ''}`}>
            <i className="bi bi-speedometer2 me-2"></i>
            Dashboard
          </Link>
        </li>
        </ul>

        <ul className="navbar-nav ms-auto px-5 pt-3">
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
  {/* <div className="date">
  <div className="mb-3">
    <p>From:</p>
    <div className="input-group date-picker">
      <DatePicker className="form-control" selected={startDate} onChange={(date) => setStartDate(date)} />
      <span className="input-group-text">
        <i className="bi bi-calendar" style={{ color: '#3576ad' }}></i>
      </span>
    </div>
  </div>
  
  <div className="mb-3">
    <p>To:</p>
    <div className="input-group date-picker">
      <DatePicker className="form-control" selected={endDate} onChange={(date) => setEndDate(date)} />
      <span className="input-group-text">
        <i className="bi bi-calendar" style={{ color: '#3576ad' }}></i>
      </span>
    </div>
  </div>
</div> */}

</nav>
    
    </>
  )
}

