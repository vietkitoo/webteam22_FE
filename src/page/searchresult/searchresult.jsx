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
import { BsGeoAlt } from 'react-icons/bs';
import { Button } from 'react-bootstrap';
import '../../component/itemhotels/itemhotel.scss';

function Searchresult_app() {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState(location.state.date);
  useEffect(() => {
    const closecalendar = (e) => {
      if (e.path[0].tagName !== 'SPAN') {
        setOpenDate(false);
      }
    };
    document.body.addEventListener('click', closecalendar);
    console.log(date[0]);
    return () => document.body.removeEventListener('click', closecalendar);
  }, []);

  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
  const { data, loading, error, reFetch } = useFetch(
    `/api/hotels?city=${destination}&min=${min || 0}&max=${max || 9999}`
  );
  const { data1 } = useFetch(
    `/api/hotels/bycity?cities=${destination}&min=${min || 0}&max=${
      max || 9999
    }`
  );
  const navigate = useNavigate();
  const handleSearch = () => {
    // reFetch();
    // dispatch({ type: 'NEW_SEARCH', payload: { destination, date, People } });
    // navigate('/searchresult', { state: { destination, date } });
  };

  const handleClick = (item) => {
    navigate(`/hotel/${item._id}`, {
      state: {
        hotelname: item.name,
        address: item.address,
        rating: item.rating,
        price: item.price,
        hotelId: item._id,
        date: date,
      },
    });
  };

  return (
    <>
      <Header />
      <div className="content search-result">
        {/* <SearchBar /> */}

        <div className="container main-search">
          <div className="list-filter">
            {/* <div className="box-position">
              <h3 className="top-filter">K???t qu???</h3>

              <div className="list-item-filter">
                <p className="title-filter">Th????ng hi???u</p>
                <ul>
                  <li>C??n h???</li>
                  <li>Kh??ch s???n</li>
                  <li>Nh?? thuy???n</li>
                  <li>Resort</li>
                </ul>
              </div>
            </div> */}
            <div className="w-100">
              <div className="setbackgroundsearch">
                <div className="search">
                  <div>T??n ch??? ngh??? / ??i???m ?????n:</div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      <BiSearch />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder={destination}
                      aria-describedby="basic-addon1"
                      onChange={(e) => {
                        setDestination(e.target.value);
                        handleSearch();
                      }}
                    />
                  </div>
                  <div>Ng??y nh???n ph??ng</div>
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
                  <div>Ng??y tr??? ph??ng</div>
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
                      onChange={async (item) => {
                        await setDate([item.selection]);
                        handleSearch();
                        //console.log(date);
                      }}
                      showSelectionPreview={true}
                      moveRangeOnFirstSelection={false}
                      months={2}
                      minDate={new Date()}
                      ranges={date}
                      direction="horizontal"
                      className="date date_location"
                    />
                  )}

                  {/* <div>S??? th??nh vi??n v?? s??? ph??ng</div>
                  <div className="input-group mb-3" type="button">
                    <span className="input-group-text" id="basic-addon1">
                      <FaBed />
                    </span>
                    <span
                      onClick={() => setChoosePeople(!ChoosePeople)}
                      className="headerSearchText form-control"
                    >{`${People.Adult} Ng?????i l???n - ${People.Children} Tr??? em - ${People.Room} Ph??ng`}</span>
                    {ChoosePeople && (
                      <div className="people">
                        <div className="peopleItem ">
                          <span className="peopletext">Ng?????i l???n</span>
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
                          <span className="peopletext">Tr??? em</span>
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
                          <span className="peopletext">Ph??ng</span>
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
                      label="Nh?? v?? c??n h??? nguy??n c??n"
                    />
                  </div>
                  <div>
                    <MDBCheckbox
                      name="flexCheck1"
                      value="1"
                      id="flexCheckDefault1"
                      label="T??i ??i c??ng t??c"
                    />
                  </div> */}
                  {/* <button
                      className="btn btn-primary input-group "
                      type="submit"
                      onClick={handleSearch}
                    >
                      T??m
                    </button> */}
                </div>
              </div>
            </div>
          </div>

          <div className="load-list">
            <div className="list-search-item">
              <div className="count-sort bg-box">
                <div className="count text-uppercase text-success desktop">
                  C?? {data1[0]} kh??ch s???n g???n/t???i {destination}
                </div>
              </div>
              <div id="list-hotels" className="list-hotels">
                {loading ? (
                  <h2>Loading...</h2>
                ) : (
                  <>
                    {data.map((item) => (
                      <div className="item-hotel bg-box">
                        <img src={item.image} alt={item.name} />
                        <div className="item-content">
                          <a href="" onClick={() => handleClick(item)}>
                            <h4>{item.name}</h4>
                          </a>

                          <p className="address">
                            <BsGeoAlt />
                            <>{item.address}</>
                          </p>
                          <div className="rate">{item.rating}</div>
                        </div>
                        <div className="price">
                          <div className="content-price">
                            <div className="d-price">
                              <p>Ch??? t???</p>
                              <p className="c-price">{item.price}VND</p>
                              <span>VN??</span>
                              <p>ph??ng/????m</p>
                            </div>
                            <Button onClick={() => handleClick(item)}>
                              ?????t ngay
                            </Button>
                          </div>
                        </div>
                      </div>
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
