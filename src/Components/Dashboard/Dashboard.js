import React, { useContext, useState } from 'react';
import './Dashboard.css';
import { Route, Routes } from 'react-router-dom';
import { Header, HeaderSecond } from '../Header/Header';
import { DashboardContext } from '../DashboardUseContext/DashboardProvider';
import { ComponentMap } from '../ComponentMapper/ComponentMapper';
import SideBar from '../Side-Bar/SideBar';
import { TemperaturePage } from '../Pages/TemperaturePage';
import CombineAreaChart from '../Charts/CombineChart/CombineAreaChart';
import CombinePieChart from '../Charts/CombineChart/CombinepieChart';
import CombineBarChart from '../Charts/CombineChart/CombineBarChart';
import CombineTable from '../Charts/CombineChart/CombineTable';
import { AqiPage } from '../Pages/AqiPage';
import { HumidityPage } from '../Pages/HumidityPage';

function Dashboard() {
  const { theme, toggleTheme } = useContext(DashboardContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`dashboard-container d-flex flex-column vh-100 ${theme}`}>
      <Header toggleSidebar={toggleSidebar} />
      
      <div className="d-flex flex-grow-1">
        {/* Sidebar for small screens / Navbar for larger screens */}
        <HeaderSecond/>
        <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
        <main className={`main-container flex-grow-1 ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
          <div className="container-fluid px-3 py-3">
            <div className="row">
              {['tempCurrentVal', 'humidityCurrentVal', 'aqiCurrentVal'].map((currentId, index) => {
                const currentComponent = ComponentMap.find((component) => component.id === currentId);
                return (
                  <div key={index} className="col-md-4">
                    <div className="card">
                      <div>{currentComponent.component}</div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Routes for page navigation */}
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    {/* First Row */}
                    <div className="row gx-3">
                      <div className="col-md-8">
                        <div className="card" style={{ height: '400px', width: '100%' }}>
                          <CombineAreaChart />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card" style={{ height: '400px', width: '100%' }}>
                          <CombinePieChart />
                        </div>
                      </div>
                    </div>

                    {/* Second Row */}
                    <div className="row gx-3">
                      <div className="col-md-4">
                        <div className="card" style={{ height: '400px', width: '100%', overflowY: 'auto' }}>
                          <CombineTable />
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="card" style={{ height: '400px', width: '100%' }}>
                          <CombineBarChart />
                        </div>
                      </div>
                    </div>
                  </>
                }
              />
              <Route path="temperaturePage" element={<TemperaturePage />} />
              <Route path="aqiPage" element={<AqiPage />} />
              <Route path="humidityPage" element={<HumidityPage />} />
            </Routes>
          </div>
        </main>
      
    </div>
  );
}

export default Dashboard;
