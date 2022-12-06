import Header from "../../component/header/header";
import './user.scss'
import { Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../context/AuthContext';
import React, { useContext, useState } from 'react';
import axios from "axios";
import {axiosInstance} from '../../config'

function User() {
    const { user } = useContext(AuthContext);
    const [userId, setUserId] = useState([user._id]);
    const [password, setPassword] = useState();
    const [newPassword, setNewPassword] = useState();
    const [confirmNewPassword, setConfirmNewPassword] = useState();
    const navigate = useNavigate();

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
            navigate('/');
        }
    }

    return(
        <>
            <Header />
            <div className="content" >
                
                <div className="container main-info">
                    <Nav defaultActiveKey="/home" className="flex-column info-nav">
                        <h2 className="top-filter">Quản lý tài khoản người dùng</h2>
                        <Nav.Link href="/#">Thông tin cá nhân</Nav.Link>
                        <Nav.Link eventKey="link-1">Thông tin đặt phòng</Nav.Link>
                        <Nav.Link eventKey="link-2">Lịch sử</Nav.Link>
                    </Nav>

                    <div className="user-info">
                        <div className="list-search-item">
                        <div className="count-sort bg-box">
                            <div className="count text-uppercase text-success desktop">
                            Có (số) khách sạn gần/tại (nơi)
                            </div>
                        </div>
                        <div id="list-infos" className="list-infos">
                            <div className="item-info bg-box">
                                <div className="item-info-intro">
                                    <h2>Thông tin cá nhân</h2>
                                </div>
                                <div className="item-content">
                                    <Form>
                                        <Form.Group className="mb-3" >
                                            <Form.Label>Địa chỉ email</Form.Label>
                                            <Form.Control type="email" defaultValue={user.email} disabled/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" >
                                            <Form.Label>Tên người dùng</Form.Label>
                                            <Form.Control type="text" defaultValue={user.username} disabled/>
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
                                    <h2>Thay đổi mật khẩu</h2>
                                </div>
                                <div className="item-content">
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group className="mb-3" >
                                            <Form.Label>Mật khẩu hiện tại</Form.Label>
                                            <Form.Control type="password" value={password} 
                                            onChange={e => setPassword(e.target.value)} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" >
                                            <Form.Label>Mật khẩu mới</Form.Label>
                                            <Form.Control type="password" value={newPassword}
                                            onChange={e => setNewPassword(e.target.value)} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" >
                                            <Form.Label>Xác nhận mật khẩu mới</Form.Label>
                                            <Form.Control type="password" value={confirmNewPassword}
                                            onChange={e => setConfirmNewPassword(e.target.value)}/>
                                        </Form.Group>
                                        <div className="d-md-flex justify-content-md-end">
                                            <Button variant="primary" className="me-md-2" disabled>
                                                Hủy
                                            </Button>
                                            <Button variant="primary" type="submit" className="me-md-2" onClick={handleSubmit} >
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
