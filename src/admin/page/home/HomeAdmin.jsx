import React from 'react'
import Chart from '../../component/chart/Chart'
import Featured from '../../component/featured/Featured'
import Navbar from '../../component/navbar/Navbar'
import Sidebar from '../../component/sidebar/Sidebar'
import Widget from '../../component/widget/Widget'
import Table from '../../component/table/Table'
import "./homeAdmin.scss"

const HomeAdmin = () => {
  return (
    <div className='homeadmin'>
    <Sidebar/>
    <div className="homeContainer">
    <Navbar/>
    <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Giao dịch gần nhất</div>
          <Table/>
        </div>
      </div>
    </div>
  );
};

export default HomeAdmin;