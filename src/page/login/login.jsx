import React, { useContext, useState } from 'react';
import axios from 'axios';
import { axiosInstance } from '../../config';
import { BsFacebook, BsGoogle, BsTwitter, BsGithub } from 'react-icons/bs';
import { useNavigate, Link } from 'react-router-dom';
import './login.scss';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBInput,
  MDBCheckbox,
} from 'mdb-react-ui-kit';
import Header from '../../component/header/header';
import Footer from '../../component/Footer/Footer';
import { AuthContext } from '../../context/AuthContext';
import { useCookies } from 'react-cookie';
import { EnumKey } from '../../utils/enum';
function Login() {
  const [justifyActive, setJustifyActive] = useState('tab1');
  const [cookies, setCookie] = useCookies(['cookie']);

  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);
  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };

  // const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // console.log({ username, email, password });
  const navigate = useNavigate();
  // const handleEmail = (e) => {
  //   setEmail(e.target.value);
  // };
  // const handleUsername = (e) => {
  //   setUsername(e.target.value);
  // };
  // const handlePassword = (e) => {
  //   setPassword(e.target.value);
  // };
  const handleChange = (e) => {
    // console.log(e);
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  // const handlelogin = async (e) => {
  //   e.preventDefault();
  //   dispatch({type: 'LOGIN_START'});

  //   try {
  //     const res = await axiosInstance.post(
  //       "/author/login",
  //       credentials
  //     );
  //     dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
  //     navigate('/');
  //   } catch (error) {
  //     dispatch({ type: 'LOGIN_FAIL', payload: error.response.data });
  //   }
  // };
  const handlelogin = async (e) => {
    e.preventDefault();
    dispatch({type: 'LOGIN_START'});

    try {
      const res = await axiosInstance.post('/api/auth/login', credentials);
      setCookie(EnumKey.access_token, res.data.token);
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
      navigate(res.data.isAdmin ? '/' : '/home');
    } catch (error) {
      dispatch({ type: 'LOGIN_FAIL', payload: error.response.data });
    }
       
};
  const handleregister = async (e) => {
    e.preventDefault();
    dispatch({ type: 'REGISTER_START' });

    try {
      const res = await axiosInstance.post('/api/auth/register', credentials);
      dispatch({ type: 'REGISTER_SUCCESS', payload: res.data });
      navigate('/');
    } catch (error) {
      dispatch({ type: 'REGISTER_FAIL', payload: error.response.data });
    }
  };
  // const handleregister = (e) => {
  //   e.preventDefault();
  //   console.log({ username, email, password });
  //   axios
  //     .post('https://backend-web-app-1.herokuapp.com/api/author/register', {
  //       username: username,
  //       email: email,
  //       password: password,
  //     })
  //     .then(function (response) {
  //       navigate('/');
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };
  return (
    <>
      <Header />
      <div className="content login">
        <div className="row">
          <div className="col-8">
            <MDBContainer className="p-3 d-flex flex-column login-form">
              <MDBTabs
                pills
                justify
                className="mb-3 d-flex flex-row justify-content-between"
              >
                <MDBTabsItem>
                  <MDBTabsLink
                    onClick={() => handleJustifyClick('tab1')}
                    active={justifyActive === 'tab1'}
                  >
                    Login
                  </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                  <MDBTabsLink
                    onClick={() => handleJustifyClick('tab2')}
                    active={justifyActive === 'tab2'}
                  >
                    Register
                  </MDBTabsLink>
                </MDBTabsItem>
              </MDBTabs>
              <MDBTabsContent>
                <MDBTabsPane show={justifyActive === 'tab1'}>
                  <div className="text-center mb-3">
                    <p>Sign in with:</p>
                    <div
                      className="d-flex justify-content-between mx-auto"
                      style={{ width: '40%' }}
                    >
                      <BsFacebook
                        className="icon-link"
                        style={{ color: '#00aa76' }}
                      />
                      <BsGoogle
                        className="icon-link"
                        style={{ color: '#00aa76' }}
                      />
                      <BsTwitter
                        className="icon-link"
                        style={{ color: '#00aa76' }}
                      />
                      <BsGithub
                        className="icon-link"
                        style={{ color: '#00aa76' }}
                      />
                    </div>

                    <p className="text-center mt-3">or:</p>
                  </div>
                  <h5>Tài Khoản</h5>
                  <MDBInput
                    wrapperClass="mb-4"
                    // label="User Name"
                    id="username"
                    placeholder="User Name"
                    type="text"
                    onChange={handleChange}
                  />
                  <h5>Mật Khẩu</h5>
                  <MDBInput
                    wrapperClass="mb-4"
                    // label="Password"
                    placeholder="Password"
                    type="password"
                    id="password"
                    onChange={handleChange}
                  />
                  <div className="d-flex justify-content-between mx-4 mb-4">
                    <MDBCheckbox
                      name="flexCheck"
                      value=""
                      id="flexCheckDefault"
                      label="Remember me"
                    />
                    <Link to="../forgot">
                      <a href="#">Forgot password?</a>
                    </Link>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="btn btn-primary mb-4 w-100 color-btn"
                      disabled={loading}
                      onClick={handlelogin}
                    >
                      Sign in
                    </button>
                    {error && <h2>{error.message}</h2>}
                  </div>

                  <p className="text-center">
                    Not a member?
                    <a
                      href="#!"
                      onClick={() => handleJustifyClick('tab2')}
                      active={justifyActive === 'tab2'}
                    >
                      Register
                    </a>
                  </p>
                </MDBTabsPane>
                <MDBTabsPane show={justifyActive === 'tab2'}>
                  <div className="text-center mb-3">
                    <p>Sign up with:</p>

                    <div
                      className="d-flex justify-content-between mx-auto"
                      style={{ width: '40%' }}
                    >
                      <BsFacebook
                        className="icon-link"
                        style={{ color: '#00aa76' }}
                      />{' '}
                      <BsGoogle
                        className="icon-link"
                        style={{ color: '#00aa76' }}
                      />{' '}
                      <BsTwitter
                        className="icon-link"
                        style={{ color: '#00aa76' }}
                      />{' '}
                      <BsGithub
                        className="icon-link"
                        style={{ color: '#00aa76' }}
                      />
                    </div>
                    <p className="text-center mt-3">or:</p>
                  </div>
                  <MDBInput
                    wrapperClass="mb-4"
                    label="UserName"
                    onChange={handleChange}
                    id="username"
                    type="text"
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="FullName"
                    onChange={handleChange}
                    id="fullname"
                    type="text"
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Email"
                    onChange={handleChange}
                    id="email"
                    type="email"
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Password"
                    onChange={handleChange}
                    id="password"
                    type="password"
                  />
                  <div className="d-flex justify-content-center mb-4">
                    <MDBCheckbox
                      name="flexCheck"
                      id="flexCheckDefault"
                      label="I have read and agree to the terms"
                    />
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary mb-4 w-100 color-btn"
                    onClick={handleregister}
                  >
                    Sign up
                  </button>
                </MDBTabsPane>
              </MDBTabsContent>
            </MDBContainer>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
