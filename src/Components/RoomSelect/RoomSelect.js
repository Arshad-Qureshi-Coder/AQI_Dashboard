import React, { useContext, useState, useEffect, useRef } from 'react';
import { DashboardContext } from '../DashboardUseContext/DashboardProvider';

export const RoomSelect = () => {
  const { selectedFloor, setSelectedRoom } = useContext(DashboardContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleRoomClick = (room) => {
    setSelectedRoom(room);
    setIsDropdownOpen(false); // Close the dropdown after selecting a room
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
      {selectedFloor && selectedFloor.rooms && (
        <div className="dropdown mb-3">
          <button
            className="btn  dropdown-toggle"
            type="button"
            onClick={handleDropdownToggle}
            aria-expanded={isDropdownOpen}
            aria-haspopup="true"
          >
            <i className="bi bi-door-closed me-2"></i> Select Room
          </button>

          {isDropdownOpen && (
            <ul className="dropdown-menu show">
              {selectedFloor.rooms.map((room) => (
                <li key={room.id}>
                  <a
                    className="dropdown-item"
                    href="#!"
                    onClick={() => handleRoomClick(room)}
                  >
                    {room.setup.Name}
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
