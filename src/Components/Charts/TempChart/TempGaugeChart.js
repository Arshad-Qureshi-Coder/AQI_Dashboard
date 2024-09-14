import React, { useContext } from 'react';
import './TemperatureChartCss.css'
import { Chart } from 'react-google-charts';
import { DashboardContext } from '../../DashboardUseContext/DashboardProvider';

function TempGaugeChart() {
    const { selectedFloor, selectedRoom } = useContext(DashboardContext);

    const latestTemperature = selectedRoom
        ? selectedRoom.data[selectedRoom.data.length - 1]?.temperature
        : selectedFloor?.rooms[0].data[selectedFloor.rooms[0].data.length - 1]?.temperature;

    const chartData = [
        ['Label', 'Value'],
        ['Temp', latestTemperature],
    ];

    const options = {
        width: '100%',
        height: '100%',
        greenFrom: 0,
        greenTo: 37,
        yellowFrom: 37,
        yellowTo: 38.5,
        redFrom: 38.5,
        redTo: 42,
        minorTicks: 5,
    };

    // Define the health index labels and colors
    const healthIndexes = [
        { label: "Normal", range: "0-37°C", color: "green" },
        { label: "Elevated", range: "37-38.5°C", color: "orange" },
        { label: "Fever", range: "38.5-42°C", color: "red" },
    ];

    return (
        <div className="d-flex gauge" style={{ height: '100%', width: '100%' }}>
            {/* Left side: Chart */}
            <div className="chart-container flex-grow-1 d-flex justify-content-center align-items-center" style={{ minHeight: '300px' }}>
                <Chart
                    chartType="Gauge"
                    data={chartData}
                    options={options}
                    width="100%"
                    height="100%"
                />
            </div>

            {/* Right side: Health Indexes */}
            <div className="index-container d-flex flex-column justify-content-center" style={{ width: '200px', paddingLeft: '20px' }}>
                <p style={{fontSize:'19px', fontWeight:'bold', color:'Gray'}}>Temperature Index</p>
                {healthIndexes.map((index, i) => (
                    <div key={i} className="mb-3">
                        <span style={{ color: index.color, fontWeight: 'bold', fontSize: '16px' }}>
                            {index.label}: {index.range}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TempGaugeChart;
