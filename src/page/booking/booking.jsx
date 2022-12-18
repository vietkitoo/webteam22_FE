import Header from '../../component/header/header';
import './booking.scss';
import Footer from '../../component/Footer/Footer';
import { BsFillCaretLeftFill } from 'react-icons/bs';
import { Link, useLocation } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button, Modal } from 'react-bootstrap';
import { AuthContext } from '../../context/AuthContext';
import { useEffect } from 'react';
import qr from '../../image/qr copy.jpg'

function Payment() {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    console.log(location.state);
  }, []);
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
              <div className="grid-item ">
                <div className="form-block">
                  <h4>Thông tin người đặt phòng</h4>
                  <Form.Group className="mb-3 ">
                    <Form.Label>Địa chỉ email</Form.Label>
                    <Form.Control
                      type="email"
                      defaultValue={user.details.email}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3 ">
                    <Form.Label>Tên người dùng</Form.Label>
                    <Form.Control
                      type="text"
                      defaultValue={user.details.username}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3 ">
                    <Form.Label>Số điện thoại</Form.Label>
                    <Form.Control
                      type="text"
                      defaultValue={user.details.phonenum}
                      placeholder="+84 987654321"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-4"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Yêu cầu thêm</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                </div>
              </div>
              <div className="grid-item">
                <div className="form-block">
                  <h4>Yêu cầu đặt phòng của bạn</h4>
                  <div className="hotel-info">
                    <h5>{location.state.hotelname}</h5>
                    <div className="">
                      Nhận phòng: {location.state.fromDate}
                    </div>
                    <div className="">Trả phòng: {location.state.toDate}</div>
                  </div>
                  <div className="room-info">
                    <h5>Thông tin phòng</h5>
                    <div>
                      {location.state.room.map((room) => (
                        <div className="room">
                          Phòng {room.roomnum}
                          <div className="d-md-flex justify-content-md-end">
                            <span>{room.price} </span>
                            <span> VND</span>
                          </div>
                        </div>
                      ))}
                      <div className="days">
                        Số ngày: 
                        <span>{location.state.days}</span>
                      </div>
                    </div>
                  </div>
                  <div className="days">
                    <h5></h5>
                  </div>
                  <div className="mt-4 mb-4 total-price d-flex justify-content-center">
                    {location.state.tot * location.state.days}
                  </div>
                </div>
                <div className="mt-2 d-md-flex justify-content-center">
                  <Button variant="primary" onClick={handleShow} className="pay-btn">
                    Thanh toán
                  </Button>
                  <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>ZaloPay QR</Modal.Title>
                  </Modal.Header>
                  <Modal.Body><img src={qr} alt='qrcode' width={450} height={700} /></Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Đóng
                    </Button>
                  </Modal.Footer>
                </Modal>
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

export default Payment;
