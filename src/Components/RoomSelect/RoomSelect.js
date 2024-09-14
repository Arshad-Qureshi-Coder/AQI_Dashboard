import React, { useContext, useState } from 'react'
import { DashboardContext } from '../DashboardUseContext/DashboardProvider';

export const RoomSelect = () => {
    const {  selectedFloor, setSelectedRoom } = useContext(DashboardContext);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

     const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleRoomClick = (room) => {
    setSelectedRoom(room);
    setIsDropdownOpen(false); 
  };

  return (
    <div>
  {selectedFloor && selectedFloor.rooms && (
    <div className="dropdown mb-3">
      <div className="nav-link text-dark dropdown-toggle" 
        onClick={handleDropdownToggle}
        aria-expanded={isDropdownOpen}
        >
        <i className="bi bi-file-earmark-text me-2"></i>
            Select Room
      </div>

      <div className={`dropdown-menu-container ${isDropdownOpen ? 'open' : ''}`}>
        <ul className="dropdown-menu-custom">
          {selectedFloor.rooms.map((room) => (
            <li key={room.id}>
              <a
                className="dropdown-item-custom"
                href="#!"
                onClick={() => handleRoomClick(room)}
              >
                {room.setup.Name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )}
</div>

  )
}
