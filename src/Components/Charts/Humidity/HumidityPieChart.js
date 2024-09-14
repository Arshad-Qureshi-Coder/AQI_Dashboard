import React, { useContext } from 'react';
import { Pie } from 'react-chartjs-2';
import { DashboardContext } from '../../DashboardUseContext/DashboardProvider';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function HumidityPieChart() {
    const { selectedFloor, selectedRoom } = useContext(DashboardContext);

    // Get the data from the selected room or the first room of the selected floor
    const humidityData = selectedRoom
        ? selectedRoom.data
        : selectedFloor?.rooms[0].data;

    // Filter the last 7 days of data
    const last7DaysData = humidityData.slice(-7);

    // Calculate the average humidity for the last 7 days
    const averageHumidity = last7DaysData.reduce((sum, entry) => sum + entry.humidity, 0) / last7DaysData.length;

    const chartData = {
        labels: ['Average Humidity', 'Remaining'],
        datasets: [
            {
                label: 'Humidity',
                data: [averageHumidity, 100 - averageHumidity], // Assuming the humidity is out of 100
                backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.2)'],
                borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
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
            <Pie data={chartData} options={options} />
        </div>
    );
}

export default HumidityPieChart;
