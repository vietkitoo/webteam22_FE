import React from 'react'
import Chart from '../../component/chart/Chart'
import Featured from '../../component/featured/Featured'
import Sidebar from '../../component/sidebar/Sidebar'
import Table from '../../component/table/Table'
import "./homeAdmin.scss"




const Home = () => {
  return (
    <div className='homeadmin'>
    <Sidebar/>
    <div className="homeContainer">

         

        <div className="charts">
          <Featured />
        </div>
        <div className="listContainer">
          <div className="listTitle">Giao dịch gần nhất</div>
          
        </div>
      </div>
    </div>
  );
};

export default Home;