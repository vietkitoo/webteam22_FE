import './single.scss';
import Sidebar from '../../component/sidebar/Sidebar';
import Chart from '../../component/chart/Chart';
import List from '../../component/table/Table';
import useFetch from '../../hook/useFetch';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import Datatable from '../../component/datatable/Datatable';
import { bookingColumns } from '../../datatablesource';
import { Link } from 'react-router-dom';

const Single = () => {
  const [user, setUser] = useState([]);
  const handleSelect = (e) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setUser(value);
  };
  const location = useLocation();
  const path = location.pathname.split('/')[1];
  const path2 = location.pathname.split('/')[2];
  console.log(path);
  console.log(path2);
  const { data, loading, error } = useFetch(`/api/${path}/${path2}`);
  console.log(data);

  return (
    <div className="single">
      <Sidebar />
      <div className=" singleContainer page-content page-container" id="page-content">
        <div className="padding">
          <div className="row container d-flex justify-content-center">
            <div className="col-xl-6 col-md-12 w-100">
              <div className="card user-card-full">
                <div className="row m-l-0 m-r-0">
                  <div className="col-sm-4 bg-c-lite-green user-profile">
                    <div className="card-block text-center text-white">
                      <div className="m-b-25">
                        <img
                          src={data.img}
                          className="img-radius"
                          alt="User-Profile-Image"
                        />
                      </div>
                      <h6 className="f-w-600">{data.fullname}</h6>
                      <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="card-block">
                      <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                        Information
                      </h6>
                      <div className="row">
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Email</p>
                          <h6 className="text-muted f-w-400">
                            {data.email}
                          </h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">phone</p>
                          <h6 className="text-muted f-w-400">{data.phone}</h6>
                        </div>
                      </div>
                      <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                      
                      </h6>
                      <div className="row">
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">City</p>
                          <h6 className="text-muted f-w-400">{data.city}</h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Country</p>
                          <h6 className="text-muted f-w-400">
                            {data.country}
                          </h6>
                        </div>
                      </div>
                      <ul className="social-link list-unstyled m-t-40 m-b-10">
                        <li>
                          <a
                            href="#!"
                            data-toggle="tooltip"
                            data-placement="bottom"
                            title=""
                            data-original-title="facebook"
                            data-abc="true"
                          >
                            <i
                              className="mdi mdi-facebook feather icon-facebook facebook"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#!"
                            data-toggle="tooltip"
                            data-placement="bottom"
                            title=""
                            data-original-title="twitter"
                            data-abc="true"
                          >
                            <i
                              className="mdi mdi-twitter feather icon-twitter twitter"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#!"
                            data-toggle="tooltip"
                            data-placement="bottom"
                            title=""
                            data-original-title="instagram"
                            data-abc="true"
                          >
                            <i
                              className="mdi mdi-instagram feather icon-instagram instagram"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
