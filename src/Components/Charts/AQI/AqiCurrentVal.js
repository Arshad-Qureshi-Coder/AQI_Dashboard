import React, { useContext } from 'react'
import { DashboardContext } from '../../DashboardUseContext/DashboardProvider'

function AqiCurrentVal() {
    const { selectedFloor, selectedRoom } = useContext(DashboardContext);


    const currentAqi = selectedRoom
    ? selectedRoom.data[selectedRoom.data.length - 1]?.aqi
    : selectedFloor?.rooms[0].data[selectedFloor.rooms[0].data.length - 1]?.aqi;


   
  return (
    <div class=" bg-c-yellow order-card">
    <div class="card-block">
        <p class="text-right">
            <i class="bi bi-cloud-fog2-fill fa-2x"></i>
            <span class="f-right text-2xl">{currentAqi} </span>
        </p>
        <p class="m-b-0 ">Current AQI</p>
    </div>
</div>
  )
}

export default AqiCurrentVal