import './single.scss'
import Sidebar from '../../component/sidebar/Sidebar'
import Chart from '../../component/chart/Chart';
import List from '../../component/table/Table';
import useFetch from "../../hook/useFetch";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Datatable from '../../component/datatable/Datatable';
import { bookingColumns } from "../../datatablesource";
import { Link } from 'react-router-dom';



const Single = (  ) => {
  const [user, setUser] = useState([]);
  const handleSelect = (e) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setUser(value);
  };
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const path2 = location.pathname.split("/")[2];
  console.log(path);
  console.log(path2);
  const { data, loading, error } = useFetch(`/api/${path}/${path2}`);
  console.log(data);

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <div className="top">
          <div className="left">
          <Link to={`/${path}/${path2}/update`}>
            <div className="editButton">Chỉnh sửa</div>
            </Link>
            <h1 className="title">Thông tin cá nhân</h1>
            <div className="item">
              <img
                src={data.img}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">
                <span className="itemValue">{data.username}</span>
                </h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{data.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Số điện thoại:</span>
                  <span className="itemValue">{data.phone}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Địa chỉ:</span>
                  <span className="itemValue">
                  {data.city}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Quốc gia:</span>
                  <span className="itemValue">{data.country}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
             
          <h1 className="title">Giao dịch gần đây</h1>
          <Datatable columns={bookingColumns}/>
        </div>

      </div>
    </div>
  );
};

export default Single;