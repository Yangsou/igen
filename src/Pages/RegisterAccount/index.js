import { Link } from "react-router-dom";
import React, { Component, Fragment } from 'react';
import Banner from '../../components/Banner';
import registerAccountImage from '../../assets/img/register-account.svg';
import './styles.scss';
import Breadcrumb from '../../components/Breakcrumb';

class RegisterAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breakcrumb: [{
        label: 'Trang chủ',
        path: '/'
      }, {
        label: 'Đăng ký tài khoản',
        active: true
      }]
    }
  }
  render() {
    const { breakcrumb } = this.state;
      return (
          <Fragment>
              <Banner title="Đăng ký tài khoản" img={registerAccountImage} imgClassName="wrap-img-toiec" />
            <div className="acc-register">
              <Breadcrumb data={breakcrumb}/>
            </div>

            <section className="acc-register acc-register--padding">
                <div className="container">
                  <form className="acc-register__wrap">
                    <p className="acc-register__title">Đăng ký thông tin của bạn</p>

                    <div className="form acc-register__form">
                      <div className="form__item">
                        <p className="form__item__label">Tên đăng nhập <span className="form__required-char">*</span></p>
                        <input type="text" className="form__input" />
                      </div>
                      <div className="form__item">
                        <p className="form__item__label">Mật khẩu <span className="form__required-char">*</span></p>
                        <input autoComplete="none" type="password" className="form__input" />
                      </div>
                      <div className="form__item">
                        <p className="form__item__label">Họ tên <span className="form__required-char">*</span></p>
                        <input type="text" className="form__input" />
                      </div>

                      <div className="row">
                        <div className="form__item col-xs-6">
                          day picker
                        </div>
                        <div className="form__item col-xs-6">
                          <p className="form__item__label">Giới tính <span className="form__required-char">*</span></p>
                          <div className="form__item__radio">
                            <input type="radio" name="gender" id="male" value="male" />
                            <label htmlFor="male">Male</label>
                          </div>
                          <div className="form__item__radio">
                            <input type="radio" name="gender" id="female" value="female" />
                            <label htmlFor="female">Female</label>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="form__item col-xs-6">
                          <p className="form__item__label">Email <span className="form__required-char">*</span></p>
                          <input type="text" className="form__input" />
                        </div>
                        <div className="form__item col-xs-6">
                          <p className="form__item__label">Số điện thoại <span className="form__required-char">*</span></p>
                          <input type="text" className="form__input" />
                        </div>
                      </div>
                      
                      <div className="form__item">
                      <div className="form__item__label">Vui lòng chọn chính xác thông tin đối tượng người học để được áp dụng mức ký quỹ phù hợp. <Link to="#">Xem thêm tại đây</Link></div>
                      </div>

                      <div className="form__item">
                        <div className="form__item__radio">
                          <input type="radio" name="target" id="student" value="student" />
                          <label htmlFor="student">Học sinh</label>
                          </div>
                        <div className="form__item__radio">
                          <input type="radio" name="target" id="alumnus" value="alumnus" />
                          <label htmlFor="alumnus">Sinh viên</label>
                        </div>
                        <div className="form__item__radio">
                          <input type="radio" name="target" id="person" value="person" />
                          <label htmlFor="person">Người đi làm/ trên 25 tuổi</label>
                        </div>
                      </div>

                      <div className="form__item">
                        <p className="form__item__label">Trường học</p>
                        <div className="form__select">
                          <select>
                            <option value="1">Audi</option>
                            <option value="2">BMW</option>
                            <option value="3">Citroen</option>
                            <option value="4">Ford</option>
                            <option value="5">Honda</option>
                            <option value="6">Jaguar</option>
                            <option value="7">Land Rover</option>
                            <option value="8">Mercedes</option>
                          </select>
                        </div>
                      </div>
                      <div className="form__item">
                        <p className="form__item__label">Khoa/ Chuyên ngành</p>
                        <div className="form__select">
                          <select>
                            <option value="1">Audi</option>
                            <option value="2">BMW</option>
                            <option value="3">Citroen</option>
                            <option value="4">Ford</option>
                            <option value="5">Honda</option>
                            <option value="6">Jaguar</option>
                            <option value="7">Land Rover</option>
                            <option value="8">Mercedes</option>
                          </select>
                        </div>
                      </div>
                      <div className="form__item">
                        <p className="form__item__label">Tỉnh thành <span className="form__required-char">*</span></p>
                        <div className="form__select">
                          <select>
                            <option value="1">Audi</option>
                            <option value="2">BMW</option>
                            <option value="3">Citroen</option>
                            <option value="4">Ford</option>
                            <option value="5">Honda</option>
                            <option value="6">Jaguar</option>
                            <option value="7">Land Rover</option>
                            <option value="8">Mercedes</option>
                          </select>
                        </div>
                      </div>

                      <div className="form__item">
                        <p className="form__item__label">Nghề nghiệp hiện tại <span className="form__requied-char">*</span></p>
                        <input type="text" className="form__input" />
                      </div>

                      <div className="form__item">
                        <p className="form__item__label">Link facebook của bạn (Dùng để vào group của lớp học tập tương ứng) <span className="form__requied-char">*</span></p>
                        <input type="text" className="form__input" />
                      </div>

                      <div className="form__footer">
                        <button className="btn btn--gradient btn--radius">Gửi Đi<span className="icon icon__send"></span></button>
                        <div className="form__item__label">Bạn đã có tài khoản? <Link to="#">Đăng nhập</Link></div>
                      </div>
                    </div>
                  
                  </form>
                </div>
            </section>

          </Fragment>
      );
  }
}

export default RegisterAccount