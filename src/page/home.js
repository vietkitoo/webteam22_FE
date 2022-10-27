import './home.css';
import '../styles/css/bootstrap.min.css';
import '../styles/css/App.css';
import hinh1 from '../image/173281189.jpg';
import hinh2 from '../image/1651729679291.jpg';
import hinh3 from '../image/hinh1_dxxx.jpg';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
function home() {
  return (
    <div>
      <header className="App-header">
        <nav className="navbar navbar-light justify-content-center">
          <a href="/" className="navbar-brand logo_team">
            Tour & Travel
          </a>
          <form className="form-inline">
            <button
              type="button"
              className="btn btn-outline-info color_hover_btn_outline_info"
            >
              Đăng thông tin phòng nghỉ của quý khách
            </button>
            <Link to="/login">
              <button type="button" className="btn btn-light btn_sign">
                Đăng Nhập
              </button>
            </Link>
          </form>
        </nav>
        <nav className="navbar navbar-light justify-content-center">
          <button
            type="button"
            className="btn btn-light button-navbar btn_sign btn_select_list"
          >
            Lưu Trú
          </button>
          <button
            type="button"
            className="btn btn-light button-navbar btn_sign btn_select_list"
          >
            Chuyến Bay
          </button>
          <button
            type="button"
            className="btn btn-light button-navbar btn_sign btn_select_list"
          >
            Chuyến Bay + Khách sạn
          </button>
          <button
            type="button"
            className="btn btn-light button-navbar btn_sign btn_select_list"
          >
            Thuê xe
          </button>
          <button
            type="button"
            className="btn btn-light button-navbar btn_sign btn_select_list"
          >
            Địa điểm tham quan
          </button>
          <button
            type="button"
            className="btn btn-light button-navbar btn_sign btn_select_list"
          >
            Taxi sân bay
          </button>
        </nav>
      </header>
      <div className="contener">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={hinh1} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={hinh2} alt="Second slide" />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={hinh3} alt="Third slide" />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
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
}

export default home;
