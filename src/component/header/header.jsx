import './header.css';
import '../../styles/css/bootstrap.min.css';
import '../../styles/css/App.css';
import hinh1 from '../../image/1.jpg';
import hinh2 from '../../image/2.jpg';
import hinh3 from '../../image/3.jpg';
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
    <div>
      <header className="App-header">
        <nav className="navbar navbar-light justify-content-center">
          <a href="/" className="navbar-brand logo_team">
            Tour & Travel
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
              <FontAwesomeIcon icon={faPlane} className="headerIcon" />
              Chuyến Bay
            </button>
          </Link>
          <Link to="/">
            <button
              type="button"
              className="btn btn-light button-navbar btn_sign btn_select_list"
            >
              <FontAwesomeIcon icon={faBed} className="headerIcon" />
              Chuyến Bay + Khách sạn
            </button>
          </Link>
          <Link to="/">
            <button
              type="button"
              className="btn btn-light button-navbar btn_sign btn_select_list"
            >
              <FontAwesomeIcon icon={faCar} className="headerIcon" />
              Thuê xe
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
          <Link to="/">
            <button
              type="button"
              className="btn btn-light button-navbar btn_sign btn_select_list"
            >
              <FontAwesomeIcon icon={faTaxi} className="headerIcon" />
              Taxi sân bay
            </button>
          </Link>
        </nav>

        <div className="headerSearch">
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
        </div>
      </header>
      <div className="contener">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="true"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={hinh1} alt="First slide" className="d-block w-100" />
            </div>
            <div className="carousel-item">
              <img src={hinh2} alt="Second slide" className="d-block w-100" />
            </div>
            <div className="carousel-item">
              <img src={hinh3} alt="Third slide" className="d-block w-100" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="info_select">
          <div className="text_1">Áp dụng đến 3/1/2023</div>
          <div className="text_2">Tiết kiệm 15% với Ưu Đãi Cuối Năm</div>
          <div className="text_3">
            Vẫn còn kịp để thực hiện thêm một chuyến đi trong danh sách của bạn
          </div>
          <button type="button" className="btn btn-primary buton_text zindex">
            Khám phá ưu đãi
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
