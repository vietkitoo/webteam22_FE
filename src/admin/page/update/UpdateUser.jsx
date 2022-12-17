import "./update.scss";
import Sidebar from "../../component/sidebar/Sidebar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import axios from "axios";
import {useLocation,useNavigate} from 'react-router-dom';
import {useState } from 'react';
import { axiosInstance } from "../../../config";

const UpdateUser = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [info, setInfo] = useState({});
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const path2 = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "upload");
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dypkrcusa/image/upload",
        data
      );

      const { url } = uploadRes.data;

      const updateUser = {
        ...info,
        img: url,
      };

      await axiosInstance.put(`/api/${path}/${path2}/update`, updateUser);
      navigate('/users');
    } catch (err) {
      console.log(err);
    }
  };

  console.log(info);
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <div className="top">
          <h1>Cập nhật thông tin người dùng</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    onChange={handleChange}
                    type={input.type}
                    placeholder={input.placeholder}
                    id={input.id}
                  />
                </div>
              
              ))}
              <div className="formInput">
                <label>Quản trị viên</label>
                <select id="isAdmin" onChange={handleChange}>
                  <option value={false}>No</option>
                  <option value={true}>Yes</option>
                </select>
              </div>
              <button onClick={handleClick}>Gửi</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
