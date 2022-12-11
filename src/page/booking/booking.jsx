import Header from '../../component/header/header';
import './booking.scss';
import Footer from '../../component/Footer/Footer';
import { BsFillCaretLeftFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { AuthContext } from '../../context/AuthContext';

function Searchresult_app() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Header />
      <div className="content content-booking">
        <div className="content-top position-relative d-flex align-items-center justify-content-center">
          <Link to="#" className="back">
            <BsFillCaretLeftFill />
            Quay lại
          </Link>
          <h2>Thông tin đặt phòng</h2>
        </div>

        <div className="main-booking">
          <Form>
            <div className="main-grid">
              <div className="grid-item">
                <div className="form-block">
                  <h4>Thông tin người đặt phòng</h4>
                  <Form.Group className="mb-3 " >
                    <Form.Label>Địa chỉ email</Form.Label>
                    <Form.Control type="email" defaultValue={user.email} disabled/>
                  </Form.Group>
                  <Form.Group className="mb-3 " >
                      <Form.Label>Tên người dùng</Form.Label>
                      <Form.Control type="text" defaultValue={user.username} disabled/>
                  </Form.Group>
                </div>
                
              </div>
              <div className="grid-item">
                <div className="form-block">
                  <h4>Yêu cầu đặt phòng của bạn</h4>
                  <div className="d-md-flex justify-content-center">
                    <Button variant="primary" type="submit" className="me-md-2" disabled>
                        Lưu thay đổi
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            

          </Form>
          
        </div>

      </div>

      <Footer />
    </>
  );
}

export default Searchresult_app;
