import React from 'react';
import registerImg from '../../../assets/img/register_exam_bg.png';

import './styles.scss';
export default class Sponser extends React.Component {
  clickTry = () => {
    window.location.href = 'https://igen.vsn.edu.vn/dang-ky-thi-thu'
  }

  render() {

    return (
      <section className="sponser-ielts lazy-load">
        <div className="container">
          <div className="register-exam-1">
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