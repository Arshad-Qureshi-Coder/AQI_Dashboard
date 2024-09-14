import React, { useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import { DashboardContext } from '../../DashboardUseContext/DashboardProvider';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

function CombineBarChart() {
    const { selectedFloor, selectedRoom } = useContext(DashboardContext);

    const chartData = {
        labels: selectedRoom
            ? selectedRoom.data.map((entry) => entry.date)
            : selectedFloor?.rooms[0].data.map((entry) => entry.date),
        datasets: [
            {
                label: 'Temperature',
                data: selectedRoom
                    ? selectedRoom.data.map((entry) => entry.temperature)
                    : selectedFloor?.rooms[0].data.map((entry) => entry.temperature),
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: '#20c997',
                
            },
            {
                label: 'Humidity',
                data: selectedRoom
                    ? selectedRoom.data.map((entry) => entry.humidity)
                    : selectedFloor?.rooms[0].data.map((entry) => entry.humidity),
                borderColor: 'rgba(9, 126, 49, 0.8)',
                backgroundColor: '#0d6efd',
                
            },
            {
                label: 'AQI',
                data: selectedRoom
                    ? selectedRoom.data.map((entry) => entry.aqi)
                    : selectedFloor?.rooms[0].data.map((entry) => entry.aqi),
                borderColor: 'rgba(255, 99, 132, 0.8)',
                backgroundColor: '#ffc107',
                
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            tooltip: {
                enabled: true,  
            },
            datalabels: {
                display: false,  
            },
        },
       
    };

    return (
        <div className="chart-card d-flex flex-column justify-content-center " style={{ padding: '30px', height: '100%', width: '100%' }}>
        <p style={{ fontSize: '20px', fontWeight: '700', color: 'gray' }}>Combine Bar</p>
        <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Bar data={chartData} options={options} />
        </div>
    </div>
    );
}

export default CombineBarChart;

