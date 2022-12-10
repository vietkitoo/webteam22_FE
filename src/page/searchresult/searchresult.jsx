import Loginform from '../../component/Form/LoginForm';
import Header from '../../component/header/header';
import './searchresult.scss';
import { Button } from 'react-bootstrap';
import Footer from '../../component/Footer/Footer';
import { Link } from 'react-router-dom';
import { Image } from 'cloudinary-react';
import { BsGeoAlt } from 'react-icons/bs';
import SearchBar from '../../component/searchbar/searchbar';
import React, { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { useLocation } from 'react-router-dom';
import ItemHotels from '../../component/itemhotels/itemhotel';
function Searchresult_app() {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
  const { data, loading, error, reFetch } = useFetch(
    `api/hotels?city=${destination}&min=${min || 0}&max=${max || 9999}`
  );
  
  return (
    <>
      <Header />
      <div className="content search-result">
        <SearchBar />
        <div className="container main-search">
          <div className="list-filter">
            <div className="box-position">
              <h3 className="top-filter">Kết quả</h3>

              <div className="list-item-filter">
                <p className="title-filter">Thương hiệu</p>
                <ul>
                  <li>Căn hộ</li>
                  <li>Khách sạn</li>
                  <li>Nhà thuyền</li>
                  <li>Resort</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="load-list">
            <div className="list-search-item">
              <div className="count-sort bg-box">
                <div className="count text-uppercase text-success desktop">
                  Có (số) khách sạn gần/tại (nơi)
                </div>
              </div>
              <div id="list-hotels" className="list-hotels">
                {/* <div className="item-hotel bg-box">
                  <Image 
                    cloudName='dxivl2lh5'
                    publicId='rest/khachsan_kib5dt'
                    crop='scale'
                    width='300'
                    height='200'
                    alt='khachsan'
                  />
                  <div className="item-content">
                    <Link to="#">
                      <h4>Stylish hotel Quy Nhơn</h4>
                    </Link>
                    <p className="address">
                      <BsGeoAlt />
                      Số 51, đường Tháp Đôi, phường Quang Trung, Quy Nhơn
                    </p>
                    <div className="rate">
                      (Đánh giá)
                    </div>
                  </div>
                  <div className="price">
                    <div className="content-price">
                      <div className="d-price">
                        <p>Chỉ từ</p>
                        <p className="c-price">
                          1,092,001
                        </p>
                        <span>VNĐ</span>
                        <p>phòng/đêm</p>
                      </div>
                      <Link to="#">
                        <Button>
                          Đặt ngay
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div> */}
                {loading ? (
                  <h2>Loading...</h2>
                ) : (
                  <>
                    {data.map((item) => (
                      <ItemHotels item={item} key={item._id} />
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
          {/* <div className="m-4">
            <div>
              <div className=" h4 d-block mx-2">
                <span>Địa điểm</span> : Tìm thấy <span> (số lượng) </span> Chi
                nhánh
              </div>
              <div className=" h5 d-block mx-2">
                Những điểm thăm quan gần đó: ....
              </div>
            </div>
            <div className="shadow item-hotel ">
              <div className="d-flex m-2">
                <Image
                  cloudName="dxivl2lh5"
                  publicId="rest/khachsan_kib5dt"
                  className="w-25"
                  crop="scale"
                />
                <div className="m-2 w-75">
                  <div className="d-flex">
                    <div className="w-75">
                      <div className="h2"> Tên chi nhánh </div>
                      <div> Khoảng cách trung tâm</div>
                      <div>
                        <TbBeach /> <span> Giáp biển</span>
                      </div>
                      <div>
                        <FaLeaf /> <span>Chỗ nghỉ du lịch </span>
                      </div>
                    </div>
                    <div className="w-25">
                      <div className="d-flex">
                        <div>Tuyệt vời</div>
                        <div>9.0</div>
                      </div>
                      <div>
                        <a>Thoái mái 9.0</a>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="fs-6 w-75">
                      MÔ TẢ CHỖ NGHỈ THEO TÌM KIẾM CỦA KHÁCH HÀNG
                    </div>
                    <div className="w-25">
                      <div>
                        <span>1.000.000</span> VND
                      </div>
                      <Link to="../hotel">
                        <button type="button" class="btn btn-primary">
                          Xem chỗ trống
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Searchresult_app;
