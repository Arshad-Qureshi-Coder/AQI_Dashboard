import React, { useContext } from 'react';
import { Line } from 'react-chartjs-2';
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
    Filler,  // Filler for the area under the line
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler // Register Filler for area chart
);

function HumidityAreaChart() {
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
                borderColor: '#6610f2',
                backgroundColor: '#d9c6f8', // This color fills the area under the line
                fill: true, // This enables the area fill under the line
                tension: 0.4, // Adds smooth curves to the line (optional)
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

export default HumidityAreaChart;
