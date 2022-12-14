import "./update.scss";
import Sidebar from "../../component/sidebar/Sidebar";
import Navbar from "../../component/navbar/Navbar";
import { useState } from "react";
import { roomInputs } from "../../formSource";
import useFetch from "../../hook/useFetch";
import axios from "axios";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import {  useLocation } from "react-router-dom";

const UpdateRoom = () => {
  
  const [info, setInfo] = useState({});
  const [rooms, setRooms] = useState([]);
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const path2 = location.pathname.split("/")[2];


  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const data = new FormData();
    const roomNumbers = rooms.split(",").map((room) => ({ number: room }));
    try {
        
      const updateroom = {
        ...info,
        roomNumbers,
      };
      await axios.put(`/api/${path}/${path2}/update`,  updateroom);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(info)
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Chỉnh sửa thông tin phòng </h1>
        </div>
        <div className="bottom">
          <div className="right">
            
            <form>
            
              {roomInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={handleChange}
                  />
                </div>
              ))}
              <div className="formInput">
                <label>Số phòng</label>
                <textarea
                  onChange={(e) => setRooms(e.target.value)}
                  placeholder="thêm dấu phẩy sau mỗi phòng"
                />
              </div>
             
              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateRoom;
