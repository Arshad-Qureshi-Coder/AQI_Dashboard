import axios from 'axios';
// import React, { useEffect } from 'react'

export const fetchData = async () => {
  try {
    const response = await axios.get(
      'https://bc3311fd-7c00-4cbb-990d-d5bcc6fd54b9.mock.pstmn.io/dashboardConfig'
    );
    if (response.status === 200) {
      console.log('Data is:', response.data);
    } else {
      console.warn('Unexpected response status:', response.status);
    }
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
  };