import React, { useContext, useState } from 'react';
import { DashboardContext } from '../DashboardUseContext/DashboardProvider';


export const FloorSelect = () => {
  const { data, setSelectedFloor, setSelectedRoom } = useContext(DashboardContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleFloorClick = (floor) => {
    setSelectedFloor(floor);
    setSelectedRoom(null); // Reset the selected room
    setIsDropdownOpen(false); // Close the dropdown after selecting a floor
  };

  return (
    <div>
      {data?.floors && (
        <div className="dropdown mb-3">
          <div className="nav-link text-dark dropdown-toggle" 
        onClick={handleDropdownToggle}
        aria-expanded={isDropdownOpen}
        >
        <i className="bi bi-file-earmark-text me-2"></i>
            Select Floor
      </div>
          <div className={`dropdown-menu-container ${isDropdownOpen ? 'open' : ''}`}>
            <ul className="dropdown-menu-custom">
              {data.floors.map((floor) => (
                <li key={floor.floor_id}>
                  <a
                    className="dropdown-item-custom"
                    href="#!"
                    onClick={() => handleFloorClick(floor)}
                  >
                    Select Floor {floor.floor_id}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
