import Header from '../../component/header/header';
import './hotel.scss';
import Footer from '../../component/Footer/Footer';
import { IoLogoNoSmoking } from 'react-icons/io';
import { GiChickenOven, GiWashingMachine } from 'react-icons/gi';
import { CiParking1 } from 'react-icons/ci';
import {FaCity, FaShower } from 'react-icons/fa';
import { MdBalcony, MdEmojiNature, MdFamilyRestroom } from 'react-icons/md';
import { AiOutlineCalendar, AiOutlineFieldTime } from 'react-icons/ai';
import { SiGooglemaps } from 'react-icons/si';
import { FcCheckmark } from 'react-icons/fc';
import { BsWifi, BsSnow } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { RiSecurePaymentLine } from 'react-icons/ri';
import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { IoIosMan } from 'react-icons/io';
import { Image } from 'cloudinary-react';
import useFetch from '../../hooks/useFetch';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';
import { AuthContext } from '../../context/AuthContext';
import format from 'date-fns/format';
import axios from 'axios';
function Hotel() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const id = location.pathname.split('/')[2];
  const { data, loading, error, reFetch } = useFetch(`/api/hotels/find/${id}`);
  const { date } = useContext(SearchContext);
  // console.log(date);
  const MILLISECONDS_PER_DAYS = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDifferent = Math.abs(date2.getTime() - date1.getTime());
    const differentDays = Math.ceil(timeDifferent / MILLISECONDS_PER_DAYS);
    return differentDays;
  }
  const days = dayDifference(date[0].endDate, date[0].startDate);
  // Lấy data hotel

  //Lấy data của room của từng hotel
  const {data1, loading1} = useFetch(`/api/hotels/room/${id}`);
  // console.log(data1);
  const [OpenDate, setOpenDate] = useState(false);

  const [selectedRoom, setSelectedRoom] = useState([]);

  const getDates = (startDate, endDate) => {
    const start = new Date(startDate);
    // const start = new Date(format(startDate, 'MM/dd/yyyy'));
    // console.log(start);
    const end = new Date(endDate);
    // const end = new Date(format(endDate, 'MM/dd/yyyy'));
    console.log(end);
    // const dates = new Date(format(start.getTime(), 'MM/dd/yyyy'));
    const dates = new Date(start.getTime());  
    console.log(dates);
    const date = [];
    // date.push(new Date(dates).getTime());
    // dates.setDate(dates.getDate() + 1);
    while (dates <= end) {
     date.push(new Date(dates).getTime());
      // date.push(new Date(format(new Date(dates).getTime(), 'MM/dd/yyyy')));
    dates.setDate(dates.getDate() + 1);
    }
    console.log(date);
    return date;
  };

  const allDates = getDates(date[0].startDate, date[0].endDate);
  console.log(allDates);
  useEffect(() => {
    const closecalendar = (e) => {
      if (e.path[0].tagName !== 'SPAN') {
        setOpenDate(false);
      }
    };
    document.body.addEventListener('click', closecalendar);
    return () => document.body.removeEventListener('click', closecalendar);
  }, []);

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      allDates.includes(new Date(date).getTime())
    );

    return !isFound;
  };
  const handleSelect = (e) => {
    const selected = e.target.checked;
    const value = e.target.value;
    setSelectedRoom(
      selected
        ? [...selectedRoom, value]
        : selectedRoom.filter((item) => item !== value)
    );
  };

  const handleClick = async () => {
    try {
      await Promise.all(
        selectedRoom.map((roomId) => {
          // console.log(roomId);
          // console.log(format(allDates, 'MM/dd/yyyy'));
          const res = axios.put(`/api/rooms/availability/${roomId}`, {
            Dates: allDates
          });
          return res.data;
        })
      );

      setOpen(false);
      navigate('/');
    } catch (err) {}
  };

  return (
    <>
      <Header />
      <div className="content w-100 d-flex content-hotel-page">
        <div className="d-flex w-75 my-4">
          {/* Thông tin hotel */}
          <div className="w-75 ">
            <div className="m-4">
              <div className=" m-2 d-flex">
                <div className="w-75">
                  <div className=" h4 d-block mx-2">
                    <span>{data.name}</span>
                  </div>
                  <div className=" d-block mx-2">
                    <SiGooglemaps />
                    <span>{data.address}</span>
                  </div>
                  <div className=" d-block mx-2">
                    <>Gía chỉ: </>
                    <span>
                      {days * data.price} cho {days} ngày{' '}
                    </span>
                  </div>
                </div>
                <div className=" w-25">
                  <button type="button" class="btn btn-primary">
                    Đặt phòng theo nhu cầu
                  </button>
                </div>
              </div>
              {/* description picture */}
              <div className="description_picture">
                <div className="d-flex">
                  <div className=" description_picture_left">
                    <span>
                      <img
                        className="col w-100"
                        src={data.image2}
                        alt={data.name}
                        crop="scale"
                      />
                    </span>
                    <span>
                      <img
                        className="col w-100"
                        src={data.image3}
                        alt={data.name}
                        crop="scale"
                      />
                    </span>
                  </div>
                  <div className="description_picture_right">
                    <span>
                      <img
                        className="col w-100"
                        src={data.image4}
                        alt={data.name}
                        crop="scale"
                      />
                    </span>
                  </div>
                </div>
                <div className="col d-flex">
                  <span>
                    <img
                      className="col w-100"
                      src={data.image5}
                      alt={data.name}
                    />
                  </span>
                  <span>
                    <Image
                      cloudName="dxivl2lh5"
                      publicId="rest/nha-nghi-o-que-3_rhizkm"
                      className="col w-100"
                      crop="scale"
                      alt="image canho"
                    />
                  </span>
                  <span>
                    <Image
                      cloudName="dxivl2lh5"
                      publicId="rest/nha-go-cap-4-dep_qe5wjy"
                      className="col w-100"
                      crop="scale"
                      alt="image canho"
                    />
                  </span>
                  <span>
                    <Image
                      cloudName="dxivl2lh5"
                      publicId="rest/nha-nghi-o-que-3_rhizkm"
                      className="col w-100"
                      crop="scale"
                      alt="image canho"
                    />
                  </span>
                  <span>
                    <Image
                      cloudName="dxivl2lh5"
                      publicId="rest/nha-nghi-o-que-3_rhizkm"
                      className="col w-100"
                      crop="scale"
                      alt="image canho"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content content-hotel-page w-75 ms-md-4">
        <div className="d-flex mb-3 ">
          <div className=" flex-fill border">
            <div className="m-3 d-flex">
              <GiChickenOven />
              <div className="mx-2"> Bếp </div>
            </div>
          </div>
          <div className="flex-fill  border mx-md-3 ">
            <div className="m-3 d-flex">
              <FaCity />
              <div className="mx-2"> Nhìn ra thành phố</div>
            </div>
          </div>
          <div className=" flex-fill border">
            <div className="m-3 d-flex">
              <GiWashingMachine />
              <div className="mx-2 "> Máy giặt </div>
            </div>
          </div>
          <div className="flex-fill border mx-md-3 ">
            <div className="m-3 d-flex">
              <BsWifi />
              <div className="mx-2 "> Wifi miễn phí </div>
            </div>
          </div>
          <div className="flex-fill  border">
            <div className="m-3 d-flex">
              <MdEmojiNature />
              <div className="mx-2 "> Sân hiên </div>
            </div>
          </div>
          <div className="flex-fill border mx-md-3 ">
            <div className="m-3 d-flex">
              <MdBalcony />
              <div className="mx-2 "> Ban công </div>
            </div>
          </div>
        </div>
        <div className="d-flex mb-3 ">
          <div className=" flex-fill border ">
            <div className="m-3 d-flex">
              <BsSnow />
              <div className="mx-2"> Điều hòa không khí </div>
            </div>
          </div>
          <div className="flex-fill  border mx-md-3 ">
            <div className="m-3 d-flex">
              <FaShower />
              <div className="mx-2"> Phòng tắm riêng</div>
            </div>
          </div>
          <div className=" flex-fill border">
            <div className="m-3 d-flex">
              <AiOutlineFieldTime />
              <div className="mx-2 "> Lê tân 24 giờ </div>
            </div>
          </div>
          <div className="flex-fill border mx-md-3 ">
            <div className="m-3 d-flex">
              <RiSecurePaymentLine />
              <div className="mx-2 "> Ổ khóa mở bằng thẻ </div>
            </div>
          </div>
        </div>
        <div className="d-flex mb-3 flex-nowrap">
          <div className=" p-2 order-1 w-100  shadow">
            <pre>{`Nằm ở thành phố Vũng Tàu, cách Bãi Sau 700 m và Bãi Trước 1,8 km, Vung Tau Melody Apartment
cung cấp chỗ nghỉ với WiFi miễn phí và khu vực ghế ngồi.
Tất cả các căn tại đây đều được bố trí máy điều hòa, TV màn hình phẳng, phòng khách với ghế sofa, 
bếp ăn đầy đủ tiện nghi đi kèm khu vực ăn
uống và phòng tắm riêng với vòi sen, áo choàng tắm cùng dép đi trong phòng. Các căn còn được trang
bị lò vi sóng, tủ lạnh, bếp nấu ăn và ấm đun nước.
Căn hộ có sân hiên.
Bãi Dứa nằm trong bán kính 2,7 km từ Vung Tau Melody Apartment trong khi Mũi Nghinh Phong cách đó 
2,4 km. Sân bay gần nhất là Sân bay Vũng Tàu,cách chỗ nghỉ 6 km.
Các cặp đôi đặc biệt thích địa điểm này — họ cho điểm 8,9 cho kỳ nghỉ dành cho 2 người.
Vung Tau Melody Apartment đã chào đón khách Booking.com từ 23 tháng 4 2019.`}</pre>
            <div>
              <strong>
                Vung Tau Melody Apartment đã chào đón khách Booking.com từ 23
                tháng 4 2019.
              </strong>
            </div>
            <div>
              <strong>Các tiện nghi được ưa chuộng nhất: </strong>
            </div>
            <div className="d-flex">
              <div className="mx-2">
                <BsWifi /> Wifi miễn phí
              </div>
              <div className="mx-2">
                <CiParking1 /> Chỗ đậu xe
              </div>
              <div className="mx-2">
                <MdFamilyRestroom /> Phòng gia đình
              </div>
              <div className="mx-2">
                <IoLogoNoSmoking /> Phòng không hút thuốc lá
              </div>
            </div>
          </div>
          <div className="order-2 flex-shrink-1 ">
            <div className="p-3 shadow mx-md-3 mb-3 bg-custom-1">
              <div className="">
                <div className="fw-bold mb-3 ">Điểm nổi bật của chỗ nghỉ</div>
                <div className="d-flex mb-3">
                  <GoLocation />
                  <div className="mx-2">Địa điểm hàng đầu chất lượng cao</div>
                </div>
                <div className="d-flex mb-3">
                  <CiParking1 />
                  <div className="mx-2">Có chỗ đậu xe trong khuôn viên</div>
                </div>
                <button
                  className="btn btn-primary input-group mt-3 "
                  type="submit"
                >
                  Đặt ngay
                </button>
              </div>
            </div>
            <div className=" p-3 mx-md-3 shadow bg-custom-1 ">
              <div className="d-flex">
                <FcCheckmark />
                <div className="mx-2 color-text-green">Thông tin uy tín</div>
              </div>
              <div className="d-block mx-2">
                Khách nói rằng mô tả và hình ảnh chỗ nghỉ này{' '}
                <strong>đúng với sự thật.</strong>
              </div>
            </div>
          </div>
        </div>
        <div className="border-bottom mb-5"></div>
      </div>
      <div className=" table w-75 ms-md-4">
        <div className="h4">Phòng trống</div>
      </div>
      <div className="table">
        <table className=" table table-bordered w-75">
          <thead className="table-primary">
            <tr>
              <th scope="flex-fill">Loại chỗ ở</th>
              <th scope="flex-fill">Phù hợp cho</th>
              <th scope="flex-fill">Giá thuê</th>
              <th scope="flex-fill">Phòng trống</th>
              <th scope="flex-fill"></th>
            </tr>
          </thead>
          {loading1 ? (
            <h2>Loading...</h2>
          ) : (
            data1.map((item) => (
              // console.log(item),
              <tbody>
                <tr>
                  <td>
                    <a href="#">{item.title}</a>
                  </td>
                  <td>
                    <IoIosMan /> x {item.maxPeople}
                  </td>
                  <td>
                    <div>{item.price} VND</div>
                  </td>
                  <td>
                    <div>
                      {item.roomNumbers.map((roomNumber) => (
                        <div>
                          <input
                            type="checkbox"
                            disabled={!isAvailable(roomNumber)}
                            id={roomNumber.number}
                            value={roomNumber._id}
                            onChange={handleSelect}
                          />
                          <label htmlFor={roomNumber.number}>
                            Number of Room: <strong>{roomNumber.number}</strong>
                          </label>
                        </div>
                      ))}
                    </div>
                  </td>
                  <td>
                    <Link to="../booking">
                      <button type="button" className="w-100 btn btn-primary" onClick={handleClick}>
                        Đặt chỗ
                      </button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            ))
          )}
        </table>
      </div>
      <Footer />
    </>
  );
}

export default Hotel;
