import React from 'react';
import Footer from '../component/Footer/Footer';
import Header from '../component/header/header';
import hinh1 from '../image/1.jpg';
import hinh2 from '../image/2.jpg';
import hinh3 from '../image/3.jpg';
import './style.css';
import vietnam from '../image/vietnam.png'
function home() {
  return (
    <>
      <Header />
      <div className="content home">
        <div className="content1">
          <div
            id="carouselExampleIndicators"
            className="carousel slide "
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
            <div className="info_select">
              <div className="text_1">Áp dụng đến 3/1/2023</div>
              <div className="text_2">Tiết kiệm 15% với Ưu Đãi Cuối Năm</div>
              <div className="text_3">
                Vẫn còn kịp để thực hiện thêm một chuyến đi trong danh sách của
                bạn
              </div>
              <button
                type="button"
                className="btn btn-primary buton_text zindex"
              >
                Khám phá ưu đãi
              </button>
            </div>
          </div>
        </div>
        <div className="justify-content-center offset-lg-2 ps-5 py-5">
          <div className="fw-bold fs-3">Ưu Đãi</div>
          <div className="figure-caption">
            Khuyến mãi, giảm giá và ưu đãi đặc biệt dành riêng cho bạn
          </div>
          <div className="setbackgroud mt-md-3 row col-md-9 ">
            <div className="d-flex">
              <div className="infor py-5  px-md-5 ">
                <div className="fw-bold">Đổi gió một thời gian</div>
                <div>
                  Tận hưởng sự tự do với kỳ nghỉ theo tháng trên Booking.com
                </div>
                <div className="pt-3">
                  <button type="button" className="btn btn-primary ">
                    Khám phá kỳ nghỉ theo tháng
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-content-center  offset-lg-2 ps-5 pb-md-5">
          <div className="fw-bold fs-3">Khám phá Việt Nam</div>
          <div className="figure-caption">
            Các điểm đến phổ biến này có nhiều điều chờ đón bạn
          </div>
          <div className="row w-75">
            <div className=" pt-3 w-50 col-xs-10 ">
              <div className="Sites Ha_noi d-flex  ">
                <div className="px-1 fw-bold fs-3">Hà Nội </div>
                <div className="National_flag ">
                  <img className="" src={vietnam} alt="lá cờ quốc gia" />
                </div>
              </div>
            </div>
            <div className="pt-3 w-50 col-xs-10 ">
              <div className="Sites Hoi_an d-flex">
                <div className="px-1 fw-bold fs-3">Hội An </div>
                <div className="National_flag ">
                  <img className="" src={vietnam} alt="lá cờ quốc gia" />
                </div>
              </div>
            </div>
          </div>
          <div className="row w-75">
            <div className="pt-3 col-xs-10 col ">
              <div className="Sites TPHCM d-flex   ">
                <div className="px-1 fw-bold fs-3">TP. Hồ Chí Minh </div>
                <div className="National_flag ">
                  <img className="" src={vietnam} alt="lá cờ quốc gia" />
                </div>
              </div>
            </div>
            <div className=" pt-3  col-xs-10 col">
              <div className="Sites Hue d-flex">
                <div className="px-1 fw-bold fs-3">Huế </div>
                <div className="National_flag ">
                  <img className="" src={vietnam} alt="lá cờ quốc gia" />
                </div>
              </div>
            </div>
            <div className=" pt-3 col-xs-10  col ">
              <div className="Sites NhaTrang d-flex">
                <div className="px-1 fw-bold fs-3">Nha Trang </div>
                <div className="National_flag ">
                  <img className="" src={vietnam} alt="lá cờ quốc gia" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default home;
