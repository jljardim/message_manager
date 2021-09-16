import React from 'react';
import HorizontalBarChart from '../../components/Graphics/Bar';
import LineChart from '../../components/Graphics/Line';


const Dashboard = () => {
    return (
      <>
        <div className="container_graphics">
          <div className="graphics_bar">
            <HorizontalBarChart />
          </div>
          <br />
          <hr />
          <div className="graphics_line">
            <LineChart />
          </div>
        </div>
      </>
    );
  };

export default Dashboard;