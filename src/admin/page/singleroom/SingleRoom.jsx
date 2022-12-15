import './single.scss'
import Sidebar from '../../component/sidebar/Sidebar'
import Chart from '../../component/chart/Chart';
import List from '../../component/table/Table';
import useFetch from "../../hook/useFetch";
import {  useLocation } from "react-router-dom";
import { useState } from "react";
import { Link } from 'react-router-dom';



const Singlehotel = () => {
 
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const path2 = location.pathname.split("/")[2];
  const { data, loading, error } = useFetch(`/api/${path}/${path2}`);
console.log(data)
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <div className="top">
          <div className="left">
          <Link to={`/${path}/${path2}/update`}>
            <div className="editButton">Chỉnh sửa</div>
            </Link>
            <h1 className="title">Thông tin phòng</h1>
            <div className="item">
              <img
                src={data.image || "https://i.ibb.co/MBtjqXQ/no-avatar.gif "}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle"> {data.title }</h1>
                <div className="detailItem">
                  <span className="itemKey">Giá thuê 1 ngày:</span>
                  <span className="itemValue">{data.price}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Mô tả:</span>
                  <span className="itemValue">{data.desc}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Số người tối đa:</span>
                  <span className="itemValue">
                  {data.maxPeople}
                  </span>
                </div>
                <div className="detailItem">
                  {/* <span className="itemKey">Số phòng:</span>
                  <span className="itemValue">{data.roomNumbers}</span> */}
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="hotel Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
       
        <h1 className="title">Giao dịch gần đây</h1>
        
        </div>
        
      </div>
    </div>
  );
};

export default Singlehotel;