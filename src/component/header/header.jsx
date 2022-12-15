import './header.scss';
import { Link, useNavigate } from 'react-router-dom';
import {
  faBed,
  faCamera,
  faTaxi,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DateRange, DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { addDays } from 'date-fns';
import React, { useContext, useState } from 'react';
import format from 'date-fns/format';
import { SearchContext } from '../../context/SearchContext';
import { AuthContext } from '../../context/AuthContext';
import { 
  BsFillQuestionCircleFill, 
  BsQuestionLg, 
  BsBoxArrowInLeft, 
  BsHouseFill,
  BsPersonFill } from 'react-icons/bs'
import Dropdown from 'react-bootstrap/Dropdown';

const Header = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
    window.location.reload();
  };

  const { dispatch } = useContext(SearchContext);
  return (
    <header className="App-header">
      <nav className="navbar navbar-light justify-content-center">
       
            <Link
            to="/home"
            spy={true}
            smooth={true}
            offset={-150}
            duration={300}
            className="navbar-brand logo_team"
            >
              STYLISH HOTEL
            </Link>

        
        
        <form className="form-inline d-flex">
          <Link to="../register-hotel">
            <button
              type="button"
              className="btn btn-outline-info color_hover_btn_outline_info"
            >
              Đăng thông tin phòng nghỉ của quý khách
            </button>
          </Link>

          <Link to="../support">
            <BsFillQuestionCircleFill 
              className='ms-2'
            />
          </Link>

          {user ? (
            <>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic" className="btn btn-light btn-user">
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Link to="../user">
                    <Dropdown.Item href="#/"><BsPersonFill />{user.details.username}</Dropdown.Item>
                  </Link>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#/action-2"><BsHouseFill />Phòng đã đặt</Dropdown.Item>
                  <Link to="../support">
                    <Dropdown.Item href="#/"><BsQuestionLg />Hỗ trợ</Dropdown.Item>
                  </Link>
                  
                  <Dropdown.Item onClick={handleLogout} href="#/action-2"><BsBoxArrowInLeft />Đăng xuất</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </>
          ) : (
            <Link to="../login">
              <button type="button" className="btn btn-light btn_sign">
                Đăng Nhập
              </button>
            </Link>
          )}
        </form>
      </nav>

      <nav className="navbar navbar-light justify-content-center">
        <Link
          to="/home"
          spy={true}
          smooth={true}
          offset={-150}
          duration={300}
        >
          <button
            type="button"
            className="btn btn-light button-navbar btn_sign btn_select_list"
          >
            <FontAwesomeIcon icon={faBed} />
            Lưu Trú
          </button>
        </Link>
        <Link to="rest">
          <button
            type="button"
            className="btn btn-light button-navbar btn_sign btn_select_list"
          >
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            Khách sạn
          </button>
        </Link>
        <Link
          to="/home#discover"
          spy={true}
          smooth={true}
          offset={-150}
          duration={300}
        >
          <button
            type="button"
            className="btn btn-light button-navbar btn_sign btn_select_list"
          >
            <FontAwesomeIcon icon={faCamera} className="headerIcon" />
            Địa điểm tham quan
          </button>
        </Link>

      </nav>
    </header>
  );
};

export default Header;
