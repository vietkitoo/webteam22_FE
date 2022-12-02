import './searchbar.scss';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { addDays } from 'date-fns';
import { useState } from 'react';
import format from 'date-fns/format';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DateRange, DateRangePicker } from 'react-date-range';
import {
    faBed,
    faCalendarDays,
    faHotel,
} from '@fortawesome/free-solid-svg-icons';
import { BsFillGeoAltFill, BsCalendarRangeFill } from 'react-icons/bs';

const SearchBar = () => {
    const [OpenDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
        },[]
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
            <div className="booking-search-bar">
                <form
                    action=''
                    target=''
                    method='get'
                    id='search-form'
                    name='search-form'
                >
                    <div className="search">
                        <div className="input">
                            <h2>Bạn muốn nghỉ dưỡng ở đâu ?</h2>
                            <div className="select-location d-flex">
                                <BsFillGeoAltFill className='input_icon' />
                                <input type='text' name='location_search' placeholder=
                                'Nhập Khách sạn / Điểm đến' className='form-control' />
                                {/* <input type='hidden' id='location' name='location' placeholder=
                                'Nhập Khách sạn / Điểm đến' className='form-control' />
                                <input type='hidden' id='hotel' name='hotel' /> */}
                            
                            </div>
                        </div>
                        <div className="input">
                            <h2>Ngày nhận - trả phòng</h2>
                            <div className="d-flex">
                                <BsCalendarRangeFill className='input_icon' />
                                <input type='text' name='location_search' className='form-control'
                                onFocus={() => setOpenDate(true)}
                                value={`${format(date[0].startDate, 'MM/dd/yyyy')} - ${format(
                                    date[0].endDate,
                                    'MM/dd/yyyy'
                                )}`} />
                            </div>
                            
                            {OpenDate && (
                                <DateRangePicker
                                    onChange={(item) => {
                                        setDate([item.selection]);
                                        setOpenDate(false)
                                    }}
                                    showSelectionPreview={true}
                                    moveRangeOnFirstSelection={false}
                                    months={2}
                                    ranges={date}
                                    direction="horizontal"
                                    className="date"
                                />
                            )}
                        </div>
                        
                        <div className="button">
                            <button id='search-btn'>Tìm kiếm</button>
                        </div>
                    </div>
                </form>

                {/* <FontAwesomeIcon icon={faHotel} className="headerIcon" />
                <input
                    type="text"
                    placeholder="Mình đi đâu thế?"
                    className="headerSearchInput"
                />
                <div type="button">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                    onClick={() => setOpenDate(!OpenDate)}
                    className="headerSearchText"
                >{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(
                    date[0].endDate,
                    'MM/dd/yyyy'
                )} `}</span>

                {OpenDate && (
                    <DateRangePicker
                    onChange={(item) => setDate([item.selection])}
                    showSelectionPreview={true}
                    moveRangeOnFirstSelection={false}
                    months={2}
                    ranges={date}
                    direction="horizontal"
                    className="date"
                    />
                )}
                </div>
                <div>
                    <FontAwesomeIcon icon={faBed} />
                <span
                    onClick={() => setChoosePeople(!ChoosePeople)}
                    className="headerSearchText"
                >{`${People.Adult} Người lớn - ${People.Children} Trẻ em - ${People.Room} Phòng`}</span>
                {ChoosePeople && (
                    <div className="people">
                    <div className="peopleItem">
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
            <div className="headerSearchItem">
              <button className="headerBtn">Tìm kiếm</button>
            </div>*/}
          </div> 
        </>
    );
};

export default SearchBar;
