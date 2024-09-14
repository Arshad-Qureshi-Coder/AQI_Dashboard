import React, { useContext } from 'react'
import './TemperatureChartCss.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { DashboardContext } from '../../DashboardUseContext/DashboardProvider'

function TempCurrentVal() {
    const { selectedFloor, selectedRoom } = useContext(DashboardContext);


    const currentTemperature = selectedRoom
    ? selectedRoom.data[selectedRoom.data.length - 1]?.temperature
    : selectedFloor?.rooms[0].data[selectedFloor.rooms[0].data.length - 1]?.temperature;


   
  return (
    <div class=" bg-c-green order-card">
    <div class="card-block">
        <p class="text-right">
            <i class="bi bi-thermometer-half fa-2x"></i>
            <span class="f-right text-2xl">{currentTemperature} °C</span>
        </p>
        <p class="m-b-0 ">Current Temperature</p>
    </div>
</div>

  )
}

export default TempCurrentVal