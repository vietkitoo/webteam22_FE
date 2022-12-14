import './single.scss'
import Sidebar from '../../component/sidebar/Sidebar'
import Navbar from '../../component/navbar/Navbar'
import Chart from '../../component/chart/Chart';
import useFetch from "../../hook/useFetch";
import {  useLocation } from "react-router-dom";
import { useState } from "react";
import { Link } from 'react-router-dom';



const Singlehotel = () => {
  const [hotel, sethotel] = useState([]);
  const handleSelect = (e) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    sethotel(value);
  };
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const path2 = location.pathname.split("/")[2];
  const { data, loading, error } = useFetch(`/api/${path}/find/${path2}`);
  console.log(path);
  console.log(path2);
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <Link to={`/${path}/${path2}/update`}>
            <button className="editButton"> Chỉnh sửa</button>
               </Link>
            <h1 className="title">Thông tin phòng</h1>
            <div className="item">
              <img
                src={data.image || "https://i.ibb.co/MBtjqXQ/no-avatar.gif "}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle"> {data.name}</h1>
                <div className="detailItem">
                  <span className="itemKey">Kiểu:</span>
                  <span className="itemValue">{data.type}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Thành phố:</span>
                  <span className="itemValue">{data.city}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Địa chỉ:</span>
                  <span className="itemValue">
                  {data.address}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Mô tả:</span>
                  <span className="itemValue">{data.distance}</span>
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