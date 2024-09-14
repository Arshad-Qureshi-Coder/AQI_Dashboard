import React, { createContext, useState, useEffect } from 'react';
import { fetchData } from '../FetchData/FetchData';
import DatePicker from 'react-datepicker';

export const DashboardContext = createContext();

 const DashboardProvider = ({ children }) => {
    const [data, setData] = useState(null);
    const [selectedFloor, setSelectedFloor] = useState(null);
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [theme, setTheme] = useState('light');
    const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

    useEffect(() => {
        const getData = async () => {
            try {
                const apiData = await fetchData();

                if (apiData && apiData.building && Array.isArray(apiData.building.floors) && apiData.building.floors.length > 0) {
                    setData(apiData.building);
                    setSelectedFloor(apiData.building.floors[0]);
                } else {
                    console.error('Building data is not available or floors are missing');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        getData();
    }, []);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
      };
    

    return (
        <DashboardContext.Provider value={{
             data, 
             selectedFloor, 
             selectedRoom, 
             setSelectedFloor, 
             setSelectedRoom, 
             theme, 
             toggleTheme,
             startDate,
             setStartDate,
             endDate,
             setEndDate
              }}>
            {children}
        </DashboardContext.Provider>
    );
};

export default DashboardProvider;