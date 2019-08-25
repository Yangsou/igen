import React from 'react';
import facebookIcon from '../../assets/img/facebook.png';
import locationIcon from '../../assets/img/location.png';
import phoneIcon from '../../assets/img/phone.png';
import emailIcon from '../../assets/img/email.png';
import logoWhite from '../../assets/img/logo-white.png';

import './Contact.scss';
export default function Contact() {
  return (
    <section className="contact lazy-load" id="contact-us">
      <div className="container">
        <div className="col-md-6 contact__item">
          <img src={logoWhite} alt="logo-white" />
          <p className="contact__item__text">Thông tin liên hệ</p>
          <p className="contact__item__text contact__item__text--large">i-Gen (Intelligent Generation)</p>
          <div className="contact__item__wrap">
            <div className="contact__item__content">
              <img className="img img--location" src={locationIcon} alt="Khu Công nghệ Phần mềm ĐHQG-HCM (ITP)<br />Khu phố 6, P.Linh Trung, Q.Thủ Đức, TP.HCM " />
              <p className="text">Khu Công nghệ Phần mềm ĐHQG-HCM (ITP)<br />Khu phố 6, P.Linh Trung, Q.Thủ Đức, TP.HCM </p>
            </div>
            <div className="contact__item__content">
            <img className="img img--phone" src={phoneIcon} alt="1900.2104" />
              <p className="text">1900.2104</p>
            </div>
            <div className="contact__item__content">
              <img className="img img--email" src={emailIcon} alt="i-Gen@vsn.edu.vn" />
              <p className="text">i-Gen@vsn.edu.vn</p>
            </div>
            <div className="contact__item__content">
              <a href="https://www.facebook.com/igen.vietnam" target="blank">
                <img className="img img--facebook" src={facebookIcon} alt="/igen.vietnam" />
              </a>
              <p className="text">/igen.vietnam</p>
            </div>
          </div>
        </div>
      
        <div className="col-md-6">
          <div className="contact__form">
            <p className="contact__form__title">Bạn cần được tư vấn?</p>
            <p className="contact__form__text">Hãy để lại thông tin, đội ngũ tư vấn sẽ liên hệ ngay với bạn</p>

            <input type="text" placeholder="Họ tên" className="contact__form__input" />
            <input type="text" placeholder="Số điện thoại" className="contact__form__input" />
            <input type="email" placeholder="Email" className="contact__form__input" required />
            <textarea type="text-area" placeholder="Nội dung cần tư vấn" className="contact__form__input contact__form__input--area" required />
            <button className="btn btn--fluid btn--gradient btn--radius">Gửi Đi<span className="icon icon__send"></span></button>

          </div>
        </div>
      </div>
    </section>
  )
}