import './header.css';
import { Link } from 'react-router-dom';
import {
  faBed,
  faCalendarDays,
  faCamera,
  faCar,
  faHome,
  faHotel,
  faLocation,
  faPerson,
  faPlane,
  faTaxi,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DateRange, DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { addDays } from 'date-fns';
import { useState } from 'react';
import format from 'date-fns/format';

const Header = () => {
  const [OpenDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const [ChoosePeople, setChoosePeople] = useState(false);
  const [People, setPeople] = useState({
    Adult: 1,
    Children: 0,
    Room: 1,
  });

  const handlePeople = (name, operation) => {
    setPeople((prev) => {
      return {
        ...prev,
        [name]: operation === 'i' ? People[name] + 1 : People[name] - 1,
      };
    });
  };
  return (
    <header className="App-header">
      <nav className="navbar navbar-light justify-content-center">
        <a href="/" className="navbar-brand logo_team">
          T&T HOTEL
        </a>
        <form className="form-inline">
          <Link to="../register-hotel">
            <button
              type="button"
              className="btn btn-outline-info color_hover_btn_outline_info"
            >
              Đăng thông tin phòng nghỉ của quý khách
            </button>
          </Link>
          <Link to="../login">
            <button type="button" className="btn btn-light btn_sign">
              Đăng Nhập
            </button>
          </Link>
          <Link to="../support">
            <button type="button" className="btn btn-light btn_sign">
              Hỗ trợ
            </button>
          </Link>
        </form>
      </nav>

      <nav className="navbar navbar-light justify-content-center">
        <Link to="/">
          <button
            type="button"
            className="btn btn-light button-navbar btn_sign btn_select_list"
          >
            <FontAwesomeIcon icon={faBed} />
            Lưu Trú
          </button>
        </Link>
        <Link to="/">
          <button
            type="button"
            className="btn btn-light button-navbar btn_sign btn_select_list"
          >
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            Khách sạn
          </button>
        </Link>
        <Link to="/ ">
          <button
            type="button"
            className="btn btn-light button-navbar btn_sign btn_select_list"
          >
            <FontAwesomeIcon icon={faCamera} className="headerIcon" />
            Địa điểm tham quan
          </button>
        </Link>
        <button
          type="button"
          className="btn btn-light button-navbar btn_sign btn_select_list"
        >
          <FontAwesomeIcon icon={faTaxi} className="headerIcon" />
          Taxi sân bay
        </button>
      </nav>

      {/* <div className="headerSearch">
        <FontAwesomeIcon icon={faHotel} className="headerIcon" />
        <input
          type="text"
          placeholder="Mình đi đâu thế?"
          className="headerSearchInput"
        />
        <div type="button">
          <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
          <span
            onClick={() => setOpenDate(!OpenDate)}
            className="headerSearchText"
          >{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(
            date[0].endDate,
            'MM/dd/yyyy'
          )} `}</span>

          {OpenDate && (
            <DateRangePicker
              onChange={(item) => setDate([item.selection])}
              showSelectionPreview={true}
              moveRangeOnFirstSelection={false}
              months={2}
              ranges={date}
              direction="horizontal"
              className="date"
            />
          )}
        </div>
        <div>
          <FontAwesomeIcon icon={faBed} />
          <span
            onClick={() => setChoosePeople(!ChoosePeople)}
            className="headerSearchText"
          >{`${People.Adult} Người lớn - ${People.Children} Trẻ em - ${People.Room} Phòng`}</span>
          {ChoosePeople && (
            <div className="people">
              <div className="peopleItem">
                <span className="peopletext">Người lớn</span>
                <button
                  disabled={People.Adult <= 1}
                  className="couter"
                  onClick={() => handlePeople('Adult', 'd')}
                >
                  -
                </button>
                <span className="couter">{People.Adult}</span>
                <button
                  className="couter"
                  onClick={() => handlePeople('Adult', 'i')}
                >
                  +
                </button>
              </div>
              <div className="peopleItem">
                <span className="peopletext">Trẻ em</span>
                <button
                  disabled={People.Children <= 0}
                  className="couter"
                  onClick={() => handlePeople('Children', 'd')}
                >
                  -
                </button>
                <span className="couter">{People.Children}</span>
                <button
                  className="couter"
                  onClick={() => handlePeople('Children', 'i')}
                >
                  +
                </button>
              </div>
              <div className="peopleItem">
                <span className="peopletext">Phòng</span>
                <button
                  disabled={People.Room <= 1}
                  className="couter"
                  onClick={() => handlePeople('Room', 'd')}
                >
                  -
                </button>
                <span className="couter">{People.Room}</span>
                <button
                  className="couter"
                  onClick={() => handlePeople('Room', 'i')}
                >
                  +
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="headerSearchItem">
          <button className="headerBtn">Tìm kiếm</button>
        </div>
>>>>>>> c0d0a62b957eabc1042f1ae3359f419a4980c31d
      </div> */}
    </header>
  );
};

export default Header;
