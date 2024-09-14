import React from 'react';
import CombineAreaChart from '../Charts/CombineChart/CombineAreaChart';
import CombinePieChart from '../Charts/CombineChart/CombinepieChart';
import CombineBarChart from '../Charts/CombineChart/CombineBarChart';
import TempLineChart from '../Charts/TempChart/TempLineChart';
import TempCurrentVal from '../Charts/TempChart/TempCurrentVal';
import TempBarChart from '../Charts/TempChart/TempBarChart';
import HumidityCurrentVal from '../Charts/Humidity/HumidityCurrentVal';
import AqiCurrentVal from '../Charts/AQI/AqiCurrentVal';
import TempGaugeChart from '../Charts/TempChart/TempGaugeChart';
import TempTable from '../Charts/TempChart/TempTable';
import HumidityBarChart from '../Charts/Humidity/HumidityBarChart';
import HumidityAreaChart from '../Charts/Humidity/HumidityAreaChart';
import HumidityDoughnutChart from '../Charts/Humidity/HumidityDoughnutChart';
import HumidityPieChart from '../Charts/Humidity/HumidityPieChart';
import AqiLineChart from '../Charts/AQI/AqiLineChart';
import AqiPieChart from '../Charts/AQI/AqiPieChart';
import AqiBarChart from '../Charts/AQI/AqiBarChart';
import AqiTable from '../Charts/AQI/AqiTable';


// A map of component IDs to actual React components
export const ComponentMap = [
    { id: 'combineAreaChart', category : 'combine', component: <CombineAreaChart /> },
    { id: 'combinePieChart', category : 'combine', component: <CombinePieChart /> },
    { id: 'combineBarChart', category : 'combine', component: <CombineBarChart /> },
    { id: 'tempCurrentVal', category : 'current', component: <TempCurrentVal /> },
    { id: 'tempLineChart', category : 'temp', component: <TempLineChart /> },
    { id: 'tempBarChart', category : 'temp', component: <TempBarChart/> },
    { id: 'tempGaugeChart', category : 'temp', component: <TempGaugeChart/> },
    { id: 'tempTable', category : 'temp', component: <TempTable/> },
    { id: 'humidityAreaChart', category : 'humidity', component: <HumidityAreaChart/> },
    { id: 'humidityDoughnutChart', category : 'humidity', component: <HumidityDoughnutChart/> },
    { id: 'humidityPieChart', category : 'humidity', component: <HumidityPieChart/> },
    { id: 'humidityBarChart', category : 'humidity', component: <HumidityBarChart/> },
    { id: 'humidityCurrentVal', category : 'current', component: <HumidityCurrentVal/> },
    { id: 'aqiCurrentVal', category : 'current', component: <AqiCurrentVal/> },
    { id: 'aqiLineChart', category : 'aqi', component: <AqiLineChart/> },
    { id: 'aqiPieChart', category : 'aqi', component: <AqiPieChart/> },
    { id: 'aqiBarChart', category : 'aqi', component: <AqiBarChart/> },
    { id: 'aqiTable', category : 'aqi', component: <AqiTable/> },
  ];

