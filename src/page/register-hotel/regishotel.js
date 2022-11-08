import './regishotel.css';
import '../../styles/css/bootstrap.min.css';
import '../../styles/css/App.css';
import { FcCheckmark } from 'react-icons/fc';
import { Link } from 'react-router-dom';
function regishotel() {
  return (
    <div className="infor-for-partner">
      <nav className="navbar navbar-light justify-content-center">
        <a href="/" className="navbar-brand logo_team">
          Tour & Travel
        </a>
        <form className="form-inline">
          <Link to="../login">
            <button type="button" className="btn btn-light btn_sign">
              Đăng Nhập
            </button>
          </Link>
          <button type="button" className="btn btn-light btn_sign">
            Trợ giúp
          </button>
        </form>
      </nav>
      <div className="introduce-and-register">
        <div className="introduce">
          <div className="text-1"> Đăng </div>
          <div className="text-2"> của Qúy Vị </div>
          <div className="text-3 font-weight-bold h1 ">
            trên Tour and Travel
          </div>
          <div className="text-4">
            Đăng kí miễn phí và chỉ mất 15 phút để hoàn tất – hãy bắt đầu ngay
            hôm nay
          </div>
        </div>
        <div className="register-for-partner ">
          <div className="text1">Tạo Đăng Ký Mới</div>
          <div>
            <div className="navbar-text d-flex">
              <FcCheckmark />
              <div className="px-1">
                Hơn 6,4 triệu nhà nghỉ dưỡng đã được đăng kí
              </div>
            </div>
            <div className="navbar-text d-flex">
              <FcCheckmark />
              <div className="px-1">
                Hơn 1 tỉ lượt khách đã lưu trú tại nhà nghỉ dưỡng
              </div>
            </div>

            <div className="navbar-text d-flex">
              <FcCheckmark className='width1'/>
              <div className="px-1">
                Hơn 40% nhà nghỉ dưỡng nhận được đơn đặt đầu tiên trong vòng một tuần sau khi đăng kí
              </div>
            </div>
          </div>
          <div>
            <div className="text2 navbar-text">
              Tạo tài khoản đối tác để bắt đầu:
            </div>
            <div className="navbar-text">
              Bằng cách đi tiếp, Quý vị đồng ý cho Booking.com gửi email tới Quý
              vị về việc đăng ký chỗ nghỉ.
            </div>
            <button type="button" className="btn btn-primary">
              Bắt Đầu ->
            </button>
          </div>
          <div>
            <div className="navbar-text">
              Quý vị đã bắt đầu quá trình đăng ký?
            </div>
            <div>
              <a href="#">Tiếp tục các bước đăng ký</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default regishotel;
