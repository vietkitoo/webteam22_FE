import './regishotel.css';
import '../../styles/css/bootstrap.min.css';
import '../../styles/css/App.css';
import { FcCheckmark } from 'react-icons/fc';
import { BsCheckCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
function regishotel() {
  return (
    <div className="app">
      <div className="introduce-for-partner">
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
            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner d-table-cell fw-bolder fs-2 link-primary">
                <div className="carousel-item active"> Căn Hộ </div>
                <div className="carousel-item "> Khách Sạn</div>
                <div className="carousel-item "> Nhà Nghỉ Dưỡng</div>
                <div className="carousel-item "> Guest House</div>
                <div className="carousel-item "> Nhà Nghỉ B&B</div>
                <div className="carousel-item "> Bất cứ chỗ nghỉ nào </div>
              </div>
              <div className="fs-4  h1 ">Của Qúy Vị</div>
            </div>
            <div className="text-3 h1 ">trên Tour and Travel</div>
            <div className="text-4">
              Đăng kí miễn phí và chỉ mất 15 phút để hoàn tất – hãy bắt đầu ngay
              hôm nay
            </div>
          </div>
          <div className="register-for-partner">
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
                <FcCheckmark className="width1" />
                <div className="px-1">
                  Hơn 40% nhà nghỉ dưỡng nhận được đơn đặt đầu tiên trong vòng
                  một tuần sau khi đăng kí
                </div>
              </div>
            </div>
            <div>
              <div className="text2 navbar-text">
                Tạo tài khoản đối tác để bắt đầu:
              </div>
              <div className="navbar-text">
                Bằng cách đi tiếp, Quý vị đồng ý cho Booking.com gửi email tới
                Quý vị về việc đăng ký chỗ nghỉ.
              </div>
              <button type="button" className="btn btn-primary">
                Bắt Đầu {'->'}
              </button>
            </div>
            <div>
              <div className="navbar-text fw-bold ">
                Quý vị đã bắt đầu quá trình đăng ký?
              </div>
              <div>
                <a href="#">Tiếp tục các bước đăng ký</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="infor-for-partner justify-content-center d-grid">
        <div className="fw-bold fs-3
        
         ">
          Sự an tâm của Quý vị là ưu tiên hàng đầu của chúng tôi
        </div>
        <div>
          Đây là cách chúng tôi giúp Quý vị cảm thấy tự tin chào đón khách:
        </div>
        <div className="regulation-for-partner">
          <div className='w-50'>
            <div className="navbar-text d-flex">
              <BsCheckCircle />
              <div className="d-block mx-1">
                Thiết lập<strong> {" "}quy tắc chung {'  '}</strong> {' '} mà khách
                phải chấp thuận trước khi đến lưu trú
              </div>
            </div>
            <div className="navbar-text d-flex">
              <BsCheckCircle />
              <div className="d-block mx-1">
                Yêu cầu {' '}<strong> đặt cọc đề phòng hư hại </strong>
                {' '}để an tâm hơn
              </div>
            </div>
            <div className="navbar-text d-flex">
              <BsCheckCircle />
              <div className="d-block mx-1">
                <strong>
                  Báo cáo hành vi sai phạm của khách
                </strong>{' '}
                nếu có vấn đề xảy ra
              </div>
            </div>
            <div className="navbar-text d-flex">
              <BsCheckCircle />
              <div className="d-block mx-1" >
                Được {' '}<strong>hỗ trợ 24/7</strong>{' '} với hơn 43 ngôn ngữ
              </div>
            </div>
            <div className="navbar-text d-flex">
              <BsCheckCircle className='width1' />
              <div className='mx-1'>
                Được bảo vệ trước các yêu cầu bồi thường liên quan đến trách
                nhiệm từ khách và cư dân xung quanh lên đến 1.000.000 USD cho
                mỗi đơn đặt
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default regishotel;
