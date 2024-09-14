import React, { useState } from 'react';
import { ComponentMap } from '../ComponentMapper/ComponentMapper';
import { Modal, Button } from 'react-bootstrap';

export const AqiPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);
  // Filter Aqi-related components from ComponentMap
  const tempComponents = ComponentMap.filter(component => component.category === 'aqi');

// Function to handle modal visibility and set the selected component
const handleShow = (component) => {
  setSelectedComponent(component);
  setShowModal(true);
};
const handleClose = () => setShowModal(false);

  return (
    <div className=" py-4" style={{fontSize:'20px', fontWeight:'bold', color:'Gray'}}>
      <span>AQI Monitoring Dashboard</span>
  <div className="row">
    {tempComponents.map((data, index) => (
      <div key={index} className="col-md-6 mb-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title "style={{fontSize:'15px', fontWeight:'bold', color:'Gray'}}>
              {data.id.replace('temp', 'AQI ')}
            </h5>
            <hr />
            <div style={{ height: '300px', width: '100%' }}>
              {data.component}
            </div>
            {/* Button inside the card to open modal */}
            <Button
                  variant="link"
                  onClick={() => handleShow(data.component)}
                  style={{ marginTop: '20px', textDecoration:'none', right:'0' }}
                >
                   View 
                </Button>
          </div>
        </div>
      </div>
    ))}
  </div>
   {/* Modal to show full chart */}
   <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Full  Chart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Display the full chart here */}
          <div style={{ height: '400px', width: '100%' }}>
            {selectedComponent}
          </div>
        </Modal.Body>
       
      </Modal>
</div>

  );
};
