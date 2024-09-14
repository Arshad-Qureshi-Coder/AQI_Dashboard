import React, { useContext } from 'react';
import { Line } from 'react-chartjs-2';
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

function TempLineChart() {
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
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
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
        <div className="chart-container d-flex justify-content-center align-items-center" style={{ height: '100%', width: '100%' }}>
            <Line data={chartData} options={options} />
        </div>
    );
}

export default TempLineChart;
