import React from 'react';
import pearson from '../../assets/img/pearson-logo.png';
import htcItc from '../../assets/img/htc-itc-logo.png';
import itp from '../../assets/img/itp-logo.png';
import uel from '../../assets/img/uel-logo.png';
import vsn from '../../assets/img/vsn-logo.png';
import registerImg from '../../assets/img/register_exam_bg.png';

import './Sponser.scss';
export default class Sponser extends React.Component {
  clickTry = () => {
    window.location.href = 'https://igen.vsn.edu.vn/dang-ky-thi-thu'
  }

  render() {

    return (
      <section className="sponser lazy-load">
        <div className="container">
          <div className="sponser__item">
            <p className="sponser__item__text"><span className="icon icon__ho-tro"></span>Đơn vị phát động</p>
            <div className="sponser__item__content">
              <div className="sponser__item__logo">
                <img src={uel} alt="Trường Đại học Kinh tế - Luật (ĐHQG-HCM)" />
                <p className="text">Trường Đại học Kinh tế - Luật (ĐHQG-HCM)</p>
              </div>
              <div className="sponser__item__logo">
                <img src={vsn} alt="Công ty cổ phần Công nghệ giáo dục VSN" />
                <p className="text">Công ty cổ phần Công nghệ giáo dục VSN</p>
              </div>
            </div>
          </div>
         
          <div className="sponser__item">
            <p className="sponser__item__text"><span className="icon icon__ho-tro"></span>Đơn vị hỗ trợ</p>
            <div className="sponser__item__content">
              <div className="sponser__item__logo">
                <img src={itp} alt="itp-logo" />
                <p className="text">Khu Công nghệ Phần mềm ĐHQG-HCM (ITP) </p>
              </div>
              <div className="sponser__item__logo">
                <img src={htcItc} alt="htcItc" />
                <p className="text">Công ty Cổ phần Viễn thông Quốc tế HTC-ITC</p>
              </div>
              <div className="sponser__item__logo">
                <img src={pearson} alt="pearson" />
                <p className="text">Nhà xuất bản Pearson</p>
              </div>
            </div>
          </div>
         
          <div className="register-exam">
            <div className="col-md-7">
              <p className="register-exam__title">Đăng Ký Thi Thử</p>
              <p className="register-exam__desc">Kiểm tra ngay trình độ của bạn để tìm thấy lớp học và thời gian phù hợp.</p>
              <div className="relative">
                <div className="register-exam__list">
                  <p className="register-exam__list__item"><span className="icon icon__check-arround"></span>Hoàn toàn miễn phí</p>
                  <p className="register-exam__list__item"><span className="icon icon__check-arround"></span>Biết ngay kết quả</p>
                  <p className="register-exam__list__item"><span className="icon icon__check-arround"></span>100% online tại nhà</p>
                </div>
                <button onClick={this.clickTry} className="btn register-exam__btn">THỬ NGAY</button>
              </div>
            </div>
            <div className="col-md-5">
              <img src={registerImg} alt="Đăng Ký Thi Thử" />
            </div>
          </div>
         </div>
      </section>
    )
  }

}