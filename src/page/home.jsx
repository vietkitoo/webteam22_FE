import React from 'react';
import Header from '../component/header/header';
import hinh1 from '../image/1.jpg';
import hinh2 from '../image/2.jpg';
import hinh3 from '../image/3.jpg';
import './style.css'

function home() {
  return (
    <>
      <Header />
      <div className="content home">
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
    </>
  );
}

export default home;
