import React, { Component } from 'react';
import { ReCaptcha } from 'react-recaptcha-google'
import facebookIcon from '../../assets/img/facebook.png';
import locationIcon from '../../assets/img/location.png';
import phoneIcon from '../../assets/img/phone.png';
import emailIcon from '../../assets/img/email.png';
import logoWhite from '../../assets/img/logo-white.png';
import swal from 'sweetalert';
import axios from 'axios';
import './Contact.scss';
class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
      txtName : '',
      txtPhoneNumber : '',
      txtEmail : '',
      txtContent : '',
      checkedCaptcha: false,
      captchaMsg: ''
    }
  }
  onLoadRecaptcha=() =>{
    if (this.captchaDemo) {
        this.captchaDemo.reset();
    }
}
componentDidMount(){
  if (this.captchaDemo) {
    this.captchaDemo.reset();
}
}
verifyCallback=(recaptchaToken) =>{
  this.setState({
    checkedCaptcha: !this.state.checkedCaptcha,
    captchaMsg: ''
  })
}
  onHandleChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.type === "checkbox"? target.checked:target.value;
    this.setState({
      [name] : value
    })
  }
  clearForm = () => {
    this.setState({
      txtName : '',
      txtPhoneNumber : '',
      txtEmail : '',
      txtContent : ''
    })
  }
  setDisplayNone = () => {
    return window.location.href.split('/').pop() === 'coming-soon'?'display-none':'';
  }
  onHandleSubmit = (event) => {
    event.preventDefault();
    if (this.state.checkedCaptcha) {
      
      return axios({
        method: 'post',
        data: {
          txtName: this.state.txtName,
          txtPhoneNumber: this.state.txtPhoneNumber,
          txtEmail: this.state.txtEmail,
          txtContent: this.state.txtContent 
        },
        url: 'https://vsn.edu.vn/api/contact-igen',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(() => {
        swal({
          title: "Đã gửi!",
          text: "Chúng tôi đã ghi nhận thông tin của bạn.",
          icon: "success",
          timer: 1000,
          button: false
        });
        this.clearForm();
        this.onLoadRecaptcha();
      })
      .catch((error) => {
          console.log(error);
      });
    } else {
      this.setState({
        captchaMsg: 'The captcha is missing or wrong!'
      })
    }
    
  }
  render(){
    return (
      <section className={`contact lazy-load ${this.setDisplayNone()}`} id="contact-us">
        <div className="container">
          <div className="col-md-6 contact__item">
            <img src={logoWhite} alt="logo-white" />
            <p className="contact__item__text">Thông tin liên hệ</p>
            <p className="contact__item__text contact__item__text--large">i-Gen (Intelligent Generation)</p>
            <div className="contact__item__wrap">
              <div className="contact__item__content">
                <img className="img img--location" src={locationIcon} alt="Khu Công nghệ Phần mềm ĐHQG-HCM (ITP)<br />Khu phố 6, P.Linh Trung, Q.Thủ Đức, TP.HCM " />
                <p className="text"><span className="bold">Khu Công nghệ Phần mềm ĐHQG-HCM (ITP)</span><br />Khu phố 6, P.Linh Trung, Q.Thủ Đức, TP.HCM </p>
              </div>
              <div className="contact__item__content">
              <img className="img img--phone" src={phoneIcon} alt="1900.2104" />
                <p className="text text--large"><span className="bold">1900.2104</span></p>
              </div>
              <div className="contact__item__content">
                <img className="img img--email" src={emailIcon} alt="igen@vsn.edu.vn" />
                <p className="text"><span className="bold">igen@vsn.edu.vn</span></p>
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
              <form className="send-form-footer" onSubmit={ this.onHandleSubmit }>
                <input 
                  type="text" 
                  name="txtName"
                  value={this.state.txtName}
                  placeholder="Họ tên" 
                  className="contact__form__input" 
                  onChange={this.onHandleChange}
                  required
                  />
                <input 
                  type="tel" 
                  name="txtPhoneNumber" 
                  value={this.state.txtPhoneNumber}
                  placeholder="Số điện thoại" 
                  className="contact__form__input" 
                  onChange={this.onHandleChange}
                  required
                  />
                <input 
                  type="email" 
                  name="txtEmail" 
                  value={this.state.txtEmail}
                  placeholder="Email" 
                  className="contact__form__input" 
                  required 
                  onChange={this.onHandleChange}
                  />
                <textarea 
                  type="text-area" 
                  name="txtContent" 
                  value={this.state.txtContent}
                  placeholder="Nội dung cần tư vấn" 
                  className="contact__form__input contact__form__input--area" 
                  required 
                  onChange={this.onHandleChange}
                  />
                    <ReCaptcha
                          ref={(el) => {this.captchaDemo = el;}}
                          size="normal"
                          data-theme="dark"            
                          render="explicit"
                          sitekey="6Lem47kUAAAAAJkXoE3vYKhm_8LD3IbXCMDKhlby"
                          onloadCallback={this.onLoadRecaptcha}
                          verifyCallback={this.verifyCallback}
                      />
                  <p className="captcha-msg">{this.state.captchaMsg}</p>
                <button type="submit" className="btn btn--fluid btn--gradient btn--radius">Gửi Đi<span className="icon icon__send"></span></button>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default Contact;