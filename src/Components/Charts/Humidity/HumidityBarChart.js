import React, { useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import { DashboardContext } from '../../DashboardUseContext/DashboardProvider';
import {
    Chart as ChartJS,
    CategoryScale, // Ensure this is imported
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale, // Ensure this is registered
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function HumidityBarChart() {
    const { selectedFloor, selectedRoom } = useContext(DashboardContext);

    const chartData = {
        labels: selectedRoom
            ? selectedRoom.data.map((entry) => entry.date)
            : selectedFloor?.rooms[0].data.map((entry) => entry.date),
        datasets: [
            {
                label: 'Humidity',
                data: selectedRoom
                    ? selectedRoom.data.map((entry) => entry.humidity)
                    : selectedFloor?.rooms[0].data.map((entry) => entry.humidity),
                borderColor: '#0dcaf0',
                backgroundColor: '#67d8ef',
            },
            // Add more datasets for humidity, AQI, etc.
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


    return <Bar data={chartData} options={options}/>;
}

export default HumidityBarChart;
