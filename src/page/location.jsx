import Loginform from '../component/Form/LoginForm';
import Header from '../component/header/header';
import './style.css';
import { Button } from 'react-bootstrap';
import Footer from '../component/Footer/Footer';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineCalendar } from 'react-icons/ai';
import format from 'date-fns/format';
import { DateRange, DateRangePicker } from 'react-date-range';
import { useState } from 'react';
function Location_app() {
  const [OpenDate, setOpenDate] = useState(false);
  const [OpenDate1, setOpenDate1] = useState(false);
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
      <div className="content">
        <div className='w-25'>
          <div className="search">
            <div>Tên chỗ nghỉ / điểm đến:</div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <BiSearch />
              </span>
              <input
                type="text"
                className="form-control"
                aria-label="Username"
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
            </div>
            <div>Ngày trả phòng</div>
            <div className="input-group mb-3 " type="button">
              <span className="input-group-text" id="basic-addon1">
                <AiOutlineCalendar />
              </span>
              <span
                onClick={() => setOpenDate1(!OpenDate1)}
                className="headerSearchText form-control"
              >
                {`${format(date[0].endDate, 'MM/dd/yyyy')} `}
              </span>
              {OpenDate1 && (
                <DateRangePicker
                  onChange={(item) => setDate([item.selection])}
                  showSelectionPreview={true}
                  moveRangeOnFirstSelection={false}
                  months={2}
                  ranges={date}
                  direction="horizontal"
                  className="date date_location "
                />
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Location_app;
