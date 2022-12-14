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



const SingleBooking = (  ) => {
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
            <div className="editButton">Chỉnh sửa trạng thái đơn hàng</div>
            </Link>
            <h1 className="title">Thông tin đặt phòng</h1>
            <div className="item">
           
                
              <div className="details">
                <h1 className="itemTitle">
                <div className="detailItem">
                 
                 <span className="itemValue">{data.fullname}</span>
               </div>
               
                </h1>
                <div className="detailItem">
                  <span className="itemKey">Số điện thoại:</span>
                  <span className="itemValue">{data.phone}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Khách sạn:</span>
                  <span className="itemValue">
                  {data.hotelname}
                  </span>
                </div>
                <div className="detailItem">
                <span className="itemKey">Kiểu phòng:</span>
                <span className="itemValue">{data.room}</span>
                <div className="detailItem">
                  </div>
                  <span className="itemKey">Số tiền thanh toán:</span>
                  <span className="itemValue">{data.totalPrice}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Ngày đặt:</span>
                  <span className="itemValue">{data.paymentDate}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Ngày nhận phòng:</span>
                  <span className="itemValue">{data.fromDate}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Ngày trả phòng:</span>
                  <span className="itemValue">{data.toDate}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Số ngày thuê:</span>
                  <span className="itemValue">{data.totalDays}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Trạng thái đặt hàng:</span>
                  <span className="itemValue">{data.status}</span>
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

export default SingleBooking;