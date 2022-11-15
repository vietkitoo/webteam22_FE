import './Footer.css'
import 'react-bootstrap'
import { BsFacebook, BsGithub, BsInstagram, BsFillTelephoneFill, BsLink } from 'react-icons/bs'

const Footer = () => {
    return (
        <footer className="text-center text-lg-start text-light font-weight-bold footer">
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div className="me-5 d-none d-lg-block mg-auto">
                    <span>Get connected with us on social networks:</span>
                </div>

                <div>
                    <a href={"#"} className="me-4 text-reset">
                        <BsFacebook />
                    </a>
                    <a href={"#"} className="me-4 text-reset">
                        <BsGithub />
                    </a>
                    <a href={"#"} className="me-4 text-reset">
                        <BsInstagram />
                    </a>
                </div>

            </section>

            <section class="">
                <div class="container text-center text-md-start mt-5">
                    <div class="row mt-3">
                        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">
                                <i class="fas fa-gem me-3"></i>Tour & Travel
                            </h6>
                            <p>
                                Giúp bạn đặt phòng mọi lúc, mọi nơi.
                            </p>
                        </div>

                        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">
                                <BsLink /> Các đường dẫn hữu ích
                            </h6>
                            <p>
                                <a href="/support" class="text-reset">Trợ giúp Đối tác</a>
                            </p>
                            <p>
                                <a href="/register-partner" class="text-reset">Đăng ký Đối tác</a>
                            </p>
                            <p>
                                <a href="/support#privacy" class="text-reset">An toàn và bảo mật</a>
                            </p>
                            <p>
                                <a href="/support#detail" class="text-reset">Các quyền lợi</a>
                            </p>
                        </div>

                        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                            <h6 class="text-uppercase fw-bold mb-4">
                                <BsFillTelephoneFill />  Liên hệ
                            </h6>
                            <p>Linh Trung, Thủ Đức, TP Hồ Chí Minh</p>
                            <p>
                            
                                email@gm.uit.edu.vn
                            </p>
                            <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
                            <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
                © 2021 Copyright:
                <a class="text-reset fw-bold" href="">T & T</a>
            </div> */}
        </footer>
    );
}

export default Footer;
