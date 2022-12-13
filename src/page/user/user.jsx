import Header from "../../component/header/header";
import './user.scss'
import { Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../context/AuthContext';
import React, { useContext, useState } from 'react';
import axios from "axios";
import {axiosInstance} from '../../config';
import {Link} from 'react-scroll';
import { BsPerson, BsShieldLock, BsHouseDoor, BsArrowCounterclockwise } from 'react-icons/bs'

function User() {
    const { user } = useContext(AuthContext);
    const [userId, setUserId] = useState([user._id]);
    const [password, setPassword] = useState();
    const [newPassword, setNewPassword] = useState();
    const [confirmNewPassword, setConfirmNewPassword] = useState();
    const [click, setClick] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => setClick(!click);

    const closeMenu = () => setClick(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newPassword !== confirmNewPassword){
            console.log("Wrong confirm new password");
        } else{
            const res = await axiosInstance.put(
                "/users/password",
                { userId, password, newPassword }
              );
            console.log("Succeed");
            navigate('/home');
        }
    }


    return(
        <>
            <Header />
            <div className="content" >
                <div className="container main-info">
                    <ul className={click ? "nav-menu flex-column active" : "nav-menu flex-column"}>
                        <h2 className="top-filter">Quản lý tài khoản người dùng</h2>
                        <li className="nav-item">
                            <Link to="userInfo" spy={true} smooth={true} offset={-150} duration={300} onClick={closeMenu}>
                            <BsPerson />Thông tin cá nhân
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="changePassword" spy={true} smooth={true} offset={-200} duration={300} onClick={closeMenu}>
                            <BsShieldLock />Thay đổi mật khẩu
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="test1" spy={true} smooth={true} offset={0} duration={300} onClick={closeMenu}>
                            <BsHouseDoor />Thông tin đặt phòng
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="test1" spy={true} smooth={true} offset={0} duration={300} onClick={closeMenu}>
                            <BsArrowCounterclockwise />Lịch sử
                            </Link>
                        </li>
                    </ul>

                    <div className="user-info">
                        <div className="list-search-item">
                        <div id="list-infos" className="list-infos">
                            <div className="item-info bg-box">
                                <div className="item-info-intro">
                                    <h2 id="userInfo">Thông tin cá nhân</h2>
                                </div>
                                <div className="item-content">
                                    <Form>
                                        <Form.Group className="mb-3" >
                                            <Form.Label>Địa chỉ email</Form.Label>
                                            <Form.Control type="email" defaultValue={user.details.email} disabled/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" >
                                            <Form.Label>Tên người dùng</Form.Label>
                                            <Form.Control type="text" defaultValue={user.details.username} disabled/>
                                        </Form.Group>
                                        <div className="d-md-flex justify-content-md-end">
                                            <Button variant="primary" type="submit" className="me-md-2" disabled>
                                                Lưu thay đổi
                                            </Button>
                                        </div>
                                        
                                    </Form>
                                </div>
                            </div>
                            <div className="item-info bg-box">
                                <div className="item-info-intro">
                                    <h2 id="changePassword">Thay đổi mật khẩu</h2>
                                </div>
                                <div className="item-content">
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group className="mb-3" >
                                            <Form.Label>Mật khẩu hiện tại</Form.Label>
                                            <Form.Control required type="password" value={password} 
                                            onChange={e => setPassword(e.target.value)}  />
                                        </Form.Group>
                                        <Form.Group className="mb-3" >
                                            <Form.Label>Mật khẩu mới</Form.Label>
                                            <Form.Control type="password" value={newPassword}
                                            onChange={e => setNewPassword(e.target.value)} required />
                                        </Form.Group>
                                        <Form.Group className="mb-3" >
                                            <Form.Label>Xác nhận mật khẩu mới</Form.Label>
                                            <Form.Control type="password" value={confirmNewPassword}
                                            onChange={e => setConfirmNewPassword(e.target.value)} />
                                        </Form.Group>
                                        <div className="d-md-flex justify-content-md-end">
                                            <Button variant="primary" className="me-md-2" 
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setPassword("");
                                                setNewPassword("");
                                                setConfirmNewPassword("");
                                            }}
                                            disabled={!(password || newPassword || confirmNewPassword)} >
                                                Hủy
                                            </Button>
                                            <Button variant="primary" type="submit" className="me-md-2" onClick={handleSubmit} 
                                            disabled={!(password && newPassword && confirmNewPassword)} >
                                                Lưu thay đổi
                                            </Button>
                                        </div>
                                        
                                    </Form>
                                </div>
                            </div>
                            <div className="item-info bg-box">
                                <div className="item-info-intro">
                                    <h2>Thông tin đặt phòng</h2>
                                </div>
                                <div className="item-content">
                                    
                                </div>
                            </div>
                            <div className="item-info bg-box">
                                <div className="item-info-intro">
                                    <h2>Lịch sử</h2>
                                </div>
                                <div className="item-content">
                                    
                                </div>
                            </div>
                        </div>
                        
                    </div>
                        
                    </div>
                
                </div>

            </div>
            
        </>
    );
}

export default User;
