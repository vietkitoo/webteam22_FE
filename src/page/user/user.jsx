import Header from "../../component/header/header";
import './user.scss'
import { Button } from 'react-bootstrap'
import Footer from "../../component/Footer/Footer";
import { BsGeoAlt } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Image } from 'cloudinary-react';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../context/AuthContext';
import React, { useContext, useState } from 'react';

function User() {
    const { user } = useContext(AuthContext);

    return(
        <>
            <Header />
            <div className="content" >
                
                <div className="container main-info">
                    <Nav defaultActiveKey="/home" className="flex-column info-nav">
                        <h2 className="top-filter">Quản lý tài khoản người dùng</h2>
                        <Nav.Link href="/home">Thông tin cá nhân</Nav.Link>
                        <Nav.Link eventKey="link-1">Thông tin đặt phòng</Nav.Link>
                        <Nav.Link eventKey="link-2">Lịch sử</Nav.Link>
                    </Nav>
                    {/* <div className="list-filter">
                        <div className="box-position">
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
                        </div>
                    </div> */}

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
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" value={user.email} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Tên</Form.Label>
                                            <Form.Control type="text"  />
                                        </Form.Group>
                                        <div className="d-md-flex justify-content-md-end">
                                            <Button variant="primary" type="submit" className="me-md-2">
                                                Lưu thay đổi
                                            </Button>
                                        </div>
                                        
                                    </Form>
                                </div>
                            </div>
                        </div>
                        <div id="list-infos" className="list-infos">
                            <div className="item-info bg-box">
                                <div className="item-info-intro">
                                    <h2>Thông tin đặt phòng</h2>
                                </div>
                                <div className="item-content">
                                    
                                </div>
                            </div>
                        </div>
                        <div id="list-infos" className="list-infos">
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
            <Footer />
        </>
    );
}

export default User;
