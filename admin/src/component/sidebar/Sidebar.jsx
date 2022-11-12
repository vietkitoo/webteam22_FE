import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HotelIcon from '@mui/icons-material/Hotel';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <div className="logo">Travel</div>
      </div>
      <div className="center">
        <ul>
            <p className="title"> Main</p>
            <li>
                <DashboardIcon/>
                <span>Bảng điều khiển</span>
            </li>
            <p className="title"> Danh sách</p>
            <li>
                <AccountBoxIcon/>
                <span>Người dùng</span>
            </li>
            <li>
                <HotelIcon/>
                <span>Khách sạn</span>
            </li>
            <li>
                <CreditCardIcon/>
                <span>Đơn hàng</span>
            </li>
            <p className="title"> Tiện ích</p>
            <li>
                <EqualizerIcon/>
                <span>Thống kê</span>
            </li>
            <li>
                <NotificationsActiveIcon/>
                <span>Thông báo</span>
            </li>
            <li>
                <WorkHistoryIcon/>
                <span>Nhật ký</span>
            </li>
            <li>
                <SettingsIcon/>
                <span>Cài đặt</span>
            </li>
            <li>
                <AccountCircleIcon/>
                <span>Thông tin cá nhân</span>
            </li>
            <li>
                <ExitToAppIcon/>
                <span>Đăng xuất</span>
            </li>
        </ul>
      </div>
      <div className="bottom">options</div>
    </div>
  )
}

export default Sidebar
