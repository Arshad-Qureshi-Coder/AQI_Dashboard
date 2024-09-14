import React, { useContext } from 'react'
import { DashboardContext } from '../../DashboardUseContext/DashboardProvider'

function HumidityCurrentVal() {
    const { selectedFloor, selectedRoom } = useContext(DashboardContext);


    const currentHumidity = selectedRoom
    ? selectedRoom.data[selectedRoom.data.length - 1]?.humidity
    : selectedFloor?.rooms[0].data[selectedFloor.rooms[0].data.length - 1]?.humidity;


   
  return (
    <div class=" bg-c-blue order-card">
    <div class="card-block">
        <p class="text-right">
            <i class="bi bi-droplet-fill fa-2x"></i>
            <span class="f-right text-2xl">{currentHumidity} H</span>
        </p>
        <p class="m-b-0 ">Current Humidity</p>
    </div>
</div>
  )
}

export default HumidityCurrentVal