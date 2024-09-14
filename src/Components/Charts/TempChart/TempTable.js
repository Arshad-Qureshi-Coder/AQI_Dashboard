import React, { useContext } from 'react';
import { Table } from 'react-bootstrap';
import { DashboardContext } from '../../DashboardUseContext/DashboardProvider';

const TempTable = () => {
    const { selectedFloor, selectedRoom } = useContext(DashboardContext);

    // Determine which data to use
    const data = selectedRoom
        ? selectedRoom.data
        : selectedFloor?.rooms[0].data || [];

    return (
        <div className="text-center">
        <div className="card-body">
            {/* <h5 className="card-title">Temperature Data Overview</h5> */}
            <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Temperature</th>
                            {/* <th>AQI</th>
                            <th>Humidity</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((entry, index) => (
                            <tr key={index}  style={{fontSize:'15px', fontWeight:'400'}}>
                                <td>{entry.date}</td>
                                <td>{entry.temperature}</td>
                                {/* <td>{entry.aqi}</td>
                                <td>{entry.humidity}</td> */}
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    </div>
    
    );
}

export default TempTable;
