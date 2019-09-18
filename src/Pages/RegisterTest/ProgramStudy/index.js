import React from 'react';
import {  Link } from "react-router-dom";
import generalImage from '../../../assets/img/program-img-general.png';
import toiecImage from '../../../assets/img/program-toiec.png';
import ieltsImage from '../../../assets/img/program-ielts-1.png';
import './styles.scss';

export default function ProgramStudy() {
  return (
    <section className="register-program lazy-load" id="program">
      <div className="container">
        <p className="register-program__title">Chọn khoá học kiểm tra đầu vào</p>
        <div className="register-program__row">
          {/* <div className="col-xs-4"> */}
            <div className="register-program__item">
              <div className="register-program__item__thumb">
                <img src={generalImage} alt="Tiếng Anh tổng quát" />
              </div>
              <p className="register-program__item__title">Tiếng Anh tổng quát</p>
              
              {/* <button className="btn btn--outline">Xem chi tiết <span className="icon icon__arrow"></span></button> */}
              <Link to={{ pathname: "/dang-ky-tai-khoan", search: "?courseId=english" }} className="btn btn--outline" rel="noopener noreferrer">Bắt đầu ngay <span className="icon icon__arrow"></span></Link>
            </div>
          {/* </div> */}
          {/* <div className="col-xs-4"> */}
            <div className="register-program__item">
              <div className="register-program__item__thumb">
                <img src={toiecImage} alt="Luyện thi TOEIC" />
              </div>
              <p className="register-program__item__title ">Luyện thi TOEIC</p>
              
              <Link to={{ pathname: "/dang-ky-tai-khoan", search: "?courseId=toeic" }} className="btn btn--outline" rel="noopener noreferrer">Bắt đầu ngay <span className="icon icon__arrow"></span></Link>
              {/* <button className="btn btn--outline">Xem chi tiết <span className="icon icon__arrow"></span></button> */}
            </div>
          {/* </div> */}
          {/* <div className="col-xs-4"> */}
            <div className="register-program__item">
              <div className="register-program__item__thumb">
                <img src={ieltsImage} alt="Luyện thi IELTS" />
              </div>
              <p className="register-program__item__title">Luyện thi IELTS</p>

                <Link to={{ pathname: "/dang-ky-tai-khoan", search: "?courseId=ielts" }} className="btn btn--outline" rel="noopener noreferrer">Bắt đầu ngay <span className="icon icon__arrow"></span></Link>
            </div>
          {/* </div> */}
        </div>
      </div>
    </section>
  )
}