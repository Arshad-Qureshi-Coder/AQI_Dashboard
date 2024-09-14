import React, { useContext } from 'react';
import { Pie } from 'react-chartjs-2';
import { DashboardContext } from '../../DashboardUseContext/DashboardProvider';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register the necessary components and plugins
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

function CombinePieChart() {
    const { selectedFloor, selectedRoom } = useContext(DashboardContext);

    // Sample data for the first entry in the selected room or floor
    const dataEntry = selectedRoom ? selectedRoom.data[0] : selectedFloor?.rooms[0].data[0];

    const chartData = {
        labels: ['Temperature', 'Humidity', 'AQI'], // Labels for the pie chart
        datasets: [
            {
                label: 'Environmental Data',
                data: [
                    dataEntry?.temperature || 0,  // Temperature value
                    dataEntry?.humidity || 0,     // Humidity value
                    dataEntry?.aqi || 0           // AQI value
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',   // Color for Temperature
                    'rgba(54, 162, 235, 0.6)',   // Color for Humidity
                    'rgba(255, 206, 86, 0.6)',   // Color for AQI
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',     // Border color for Temperature
                    'rgba(54, 162, 235, 1)',     // Border color for Humidity
                    'rgba(255, 206, 86, 1)',     // Border color for AQI
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true, // Show legend
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        let label = tooltipItem.label || '';
                        let value = tooltipItem.raw || 0;
                        return `${label}: ${value}`;
                    },
                },
            },
            datalabels: {
                color: 'white',
                
                formatter: (value, context) => {
                    return value; // Show the value on the chart
                },
                font: {
                    weight: 'bold',
                    size: 16, // Increase font size
                },
                anchor: 'center',
                align: 'center',
                display: (context) => context.chart.config.type === 'pie', 
            },
        },
    };

    return (
        <div className="chart-card d-flex flex-column justify-content-center" style={{ padding: '30px', height: '100%', width: '100%' }}>
            <p style={{ fontSize: '20px', fontWeight: '700', color: 'gray' }}>Combine Pie Chart</p>
            <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Pie data={chartData} options={options} />
            </div>
        </div>
    );
}

export default CombinePieChart;
