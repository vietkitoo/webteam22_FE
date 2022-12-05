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
  const { data1 } = useFetch(
    `api/hotels/bycity?cities=${destination}&min=${min || 0}&max=${max || 9999}`
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
                  Có {data1[0]} khách sạn gần/tại {destination}
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
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Searchresult_app;
