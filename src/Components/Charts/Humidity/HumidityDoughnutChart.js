import React, { useContext } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { DashboardContext } from '../../DashboardUseContext/DashboardProvider';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function HumidityDoughnutChart() {
    const { selectedFloor, selectedRoom } = useContext(DashboardContext);

    const humidityData = selectedRoom
        ? selectedRoom.data.map((entry) => entry.humidity)
        : selectedFloor?.rooms[0].data.map((entry) => entry.humidity);

    const latestHumidity = selectedRoom
        ? selectedRoom.data[selectedRoom.data.length - 1]?.humidity
        : selectedFloor?.rooms[0].data[selectedFloor.rooms[0].data.length - 1]?.humidity;

    const chartData = {
        labels: ['Humidity'],
        datasets: [
            {
                label: 'Humidity',
                data: [latestHumidity, 100 - latestHumidity],  // Assuming the humidity is out of 100
                backgroundColor: ['rgba(54, 162, 235, 0.6)', 'rgba(255, 99, 132, 0.2)'],
                borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
                borderWidth: 1,
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
            legend: {
                position: 'top',
            },
        },
    };

    return (
        <div className="chart-container d-flex justify-content-center align-items-center" style={{ height: '100%', width: '100%' }}>
            <Doughnut data={chartData} options={options} />
        </div>
    );
}

export default HumidityDoughnutChart;
