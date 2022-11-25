import Loginform from '../component/Form/LoginForm';
import Header from '../component/header/header';
import './style.css';
import '../styles/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Footer from '../component/Footer/Footer';
import { BiSearch } from 'react-icons/bi';
import { FaBed } from 'react-icons/fa';
import { AiOutlineCalendar } from 'react-icons/ai';
import format from 'date-fns/format';
import { DateRange, DateRangePicker } from 'react-date-range';
import { useState } from 'react';
import { MDBCheckbox } from 'mdb-react-ui-kit';
function Location_app() {
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
    <>
      <Header />
      <div className="content container">
        <div className="w-25 setbackgroundsearch ">
          <div className="search">
            <div>Tên chỗ nghỉ / điểm đến:</div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <BiSearch />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Địa danh"
                aria-describedby="basic-addon1"
              />
            </div>
            <div>Ngày nhận phòng</div>
            <div className="input-group mb-3" type="button">
              <span className="input-group-text" id="basic-addon1">
                <AiOutlineCalendar />
              </span>
              <span
                onClick={() => setOpenDate(!OpenDate)}
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
                onClick={() => setOpenDate(!OpenDate)}
                className="headerSearchText form-control"
              >
                {`${format(date[0].endDate, 'MM/dd/yyyy')} `}
              </span>
            </div>
            {OpenDate && (
              <DateRangePicker
                onChange={(item) => setDate([item.selection])}
                showSelectionPreview={true}
                moveRangeOnFirstSelection={false}
                months={2}
                ranges={date}
                direction="horizontal"
                className="date date_location"
              />
            )}
            <div>Số thành viên và số phòng</div>
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
            </div>
            <button className="btn btn-primary input-group " type="submit">Tìm</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Location_app;
