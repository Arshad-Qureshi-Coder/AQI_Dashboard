import React, { useContext, useState, useEffect, useRef } from 'react';
import { DashboardContext } from '../DashboardUseContext/DashboardProvider';

export const FloorSelect = () => {
  const { data, setSelectedFloor, setSelectedRoom } = useContext(DashboardContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleFloorClick = (floor) => {
    setSelectedFloor(floor);
    setSelectedRoom(null); // Reset the selected room
    setIsDropdownOpen(false); // Close the dropdown after selecting a floor
  };

  // Close dropdown when clicking outside of it
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div ref={dropdownRef}>
      {data?.floors && (
        <div className="dropdown mb-3">
          <button
            className="btn  dropdown-toggle"
            type="button"
            onClick={handleDropdownToggle}
            aria-expanded={isDropdownOpen}
            aria-haspopup="true"
          >
            <i className="bi bi-building me-2"></i> Select Floor
          </button>

          {isDropdownOpen && (
            <ul className="dropdown-menu show">
              {data.floors.map((floor) => (
                <li key={floor.floor_id}>
                  <a
                    className="dropdown-item"
                    href="#!"
                    onClick={() => handleFloorClick(floor)}
                  >
                    Floor {floor.floor_id}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};
