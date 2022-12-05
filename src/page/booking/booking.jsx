import Header from '../../component/header/header';
import './booking.scss';
import Footer from '../../component/Footer/Footer';
import { IoLogoNoSmoking } from 'react-icons/io';
import { BiSearch } from 'react-icons/bi';
import { GiChickenOven, GiWashingMachine } from 'react-icons/gi';
import { CiParking1 } from 'react-icons/ci';
import { FaBed, FaCity, FaShower } from 'react-icons/fa';
import { MdBalcony, MdEmojiNature, MdFamilyRestroom } from 'react-icons/md';
import { AiOutlineCalendar, AiOutlineFieldTime } from 'react-icons/ai';
import { IoIosMan } from 'react-icons/io';
import { SiGooglemaps } from 'react-icons/si';
import { FcCheckmark } from 'react-icons/fc';
import { BsWifi, BsSnow } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { RiSecurePaymentLine, RiErrorWarningLine } from 'react-icons/ri';
import format from 'date-fns/format';
import { DateRange, DateRangePicker } from 'react-date-range';
import { useState } from 'react';
import { useEffect } from 'react';
import { MDBCheckbox } from 'mdb-react-ui-kit';
import { Image } from 'cloudinary-react';
import { faBed, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
function Searchresult_app() {
  return (
    <>
      <Header />
      <div className="content content-hotel-page w-75 ms-md-4">
        <div className="d-flex">
          <div className="border p-2  ">
            <div className="h6">Chi tiết đặt phòng của bạn:</div>
            <div>
              <table className="table  table-sm ">
                <thead>
                  <tr>
                    <th>Nhận phòng</th>
                    <th>Trả phòng</th>
                  </tr>
                </thead>
                <tbody className="table-bordered">
                  <tr>
                    <td>T5, 1 tháng 12 2022</td>
                    <td>T7, 17 tháng 12 2022</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="h6">Tổng thời gian lưu trú:</div>
            <div>16 đêm</div>
          </div>
          <div className="border p-2 flex-grow-1"> abc </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Searchresult_app;
