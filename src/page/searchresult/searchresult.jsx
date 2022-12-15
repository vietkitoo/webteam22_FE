import Header from '../../component/header/header';
import './searchresult.scss';
import Footer from '../../component/Footer/Footer';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineCalendar } from 'react-icons/ai';
import format from 'date-fns/format';
import { Link } from 'react-router-dom';
import { MDBCheckbox } from 'mdb-react-ui-kit';
import React, { useContext, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { useLocation, useNavigate } from 'react-router-dom';
import ItemHotels from '../../component/itemhotels/itemhotel';
import { FaBed } from 'react-icons/fa';
import { DateRange } from 'react-date-range';
import { useEffect } from 'react';
import { SearchContext } from '../../context/SearchContext';
function Searchresult_app() {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [openDate, setOpenDate] = useState(false);
  useEffect(() => {
    const closecalendar = (e) => {
      if (e.path[0].tagName !== 'SPAN') {
        setOpenDate(false);
      }
    };
    document.body.addEventListener('click', closecalendar);
    return () => document.body.removeEventListener('click', closecalendar);
  }, []);

  const [date, setDate] = useState(location.state.date);
  // const [date, setDate] = useState([
  //   {
  //     startDate: new Date(),
  //     endDate: new Date(),
  //     key: 'selection',
  //   },
  // ]);
  
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
  const { data, loading, error, reFetch } = useFetch(
    `api/hotels?city=${destination}&min=${min || 0}&max=${max || 9999}`
  );
  const { data1 } = useFetch(
    `api/hotels/bycity?cities=${destination}&min=${min || 0}&max=${max || 9999}`
  );
  const [People, setPeople] = useState({
    Adult: 1,
    Children: 0,
    Room: 1,
  });
  const navigate = useNavigate();
  const { dispatch } = useContext(SearchContext);
  const handleSearch = () => {
    // reFetch();
    // dispatch({ type: 'NEW_SEARCH', payload: { destination, date, People } });
    navigate('/searchresult', { state: { destination, date, People } });
  };


  // const [ChoosePeople, setChoosePeople] = useState(false);
  // const [People, setPeople] = useState({
  //   Adult: 1,
  //   Children: 0,
  //   Room: 1,
  // });
  // const handlePeople = (name, operation) => {
  //   setPeople((prev) => {
  //     return {
  //       ...prev,
  //       [name]: operation === 'i' ? People[name] + 1 : People[name] - 1,
  //     };
  //   });
  // };

  return (
    <>
      <Header />
      <div className="content search-result">
        {/* <SearchBar /> */}
        
        
        <div className="container main-search">
          <div className="list-filter">
            {/* <div className="box-position">
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
            </div> */}
            <div className="w-100">
              <div className="setbackgroundsearch">
                <div className="search">
                  <div>Tên chỗ nghỉ / điểm đến:</div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      <BiSearch />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder={destination} 
                      aria-describedby="basic-addon1"
                      onChange={(e) => setDestination(e.target.value)}
                    />
                  </div>
                  <div>Ngày nhận phòng</div>
                  <div className="input-group mb-3" type="button">
                    <span className="input-group-text" id="basic-addon1">
                      <AiOutlineCalendar />
                    </span>
                    <span
                      onClick={() => setOpenDate((prev) => !prev)}
                      className="headerSearchText form-control"
                    >
                      {`${format(date[0].startDate, 'MM/dd/yyyy')}`}
                    </span>
                  </div>
                  <div>Ngày trả phòng</div>
                  <div className="input-group mb-3 " type="button">
                    <span className="input-group-text" id="basic-addon1">
                      <AiOutlineCalendar />
                    </span>
                    <span
                      onClick={() => setOpenDate(!openDate)}
                      className="headerSearchText form-control"
                    >
                      {`${format(date[0].endDate, 'MM/dd/yyyy')} `}
                    </span>
                  </div>
                  {openDate && (
                    <DateRange
                      onChange={(item) => setDate([item.selection])}
                      showSelectionPreview={true}
                      moveRangeOnFirstSelection={false}
                      months={2}
                      minDate={new Date()}
                      ranges={date}
                      direction="horizontal"
                      className="date date_location"
                    />
                  )}
                  {/* <div>Số thành viên và số phòng</div>
                  <div className="input-group mb-3" type="button">
                    <span className="input-group-text" id="basic-addon1">
                      <FaBed />
                    </span>
                    <span
                      onClick={() => setChoosePeople(!ChoosePeople)}
                      className="headerSearchText form-control"
                    >{`${People.Adult} Người lớn - ${People.Children} Trẻ em - ${People.Room} Phòng`}</span>
                    {ChoosePeople && (
                      <div className="people">
                        <div className="peopleItem ">
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
                  <div>
                    <MDBCheckbox
                      name="flexCheck"
                      value=""
                      id="flexCheckDefault"
                      label="Nhà và căn hộ nguyên căn"
                    />
                  </div>
                  <div>
                    <MDBCheckbox
                      name="flexCheck1"
                      value="1"
                      id="flexCheckDefault1"
                      label="Tôi đi công tác"
                    />
                  </div> */}
                  <Link to="../searchresult">
                    <button
                      className="btn btn-primary input-group "
                      type="submit"
                      onClick={handleSearch}
                    >
                      Tìm
                    </button>
                  </Link>
                </div>
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
