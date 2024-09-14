import React, { useContext } from 'react';
import { Table } from 'react-bootstrap';
import { DashboardContext } from '../../DashboardUseContext/DashboardProvider';
import './CombineCharts.css'
const CombineTable = () => {
    const { selectedFloor, selectedRoom } = useContext(DashboardContext);

    // Determine which data to use
    const data = selectedRoom
        ? selectedRoom.data
        : selectedFloor?.rooms[0].data || [];

    return (
        <div className="text-center">
            <div className="card-body" >
                <h5 className="card-title ">Data Overview</h5>
                <Table striped bordered hover>
                    <thead>
                        <tr >
                            <th>Date</th>
                            <th>Temperature</th>
                            <th>AQI</th>
                            <th>Humidity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((entry, index) => (
                            <tr key={index}  >
                                <td>{entry.date}</td>
                                <td>{entry.temperature}</td>
                                <td>{entry.aqi}</td>
                                <td>{entry.humidity}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default CombineTable;
