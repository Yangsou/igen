import { Link } from "react-router-dom";
import React, { Component, Fragment } from 'react';
import Banner from '../../components/Banner';
import registerAccountImage from '../../assets/img/register-account.svg';
import './styles.scss';
import Breadcrumb from '../../components/Breakcrumb';
import universities from '../../universities.json';
import Selection from "../../components/Selection";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
      }],
      universities: universities.map((e) => {
        return {
          ...e,
          value: e.name
        }
      }),
      departments: [],
      cities: [],
      form: {
        university: null,
        department: null,
        city: null,
        birthDay: null
      }
    }
  }
  changeUniversity = (value) => {
    let { form, universities } = this.state;
    form = {
      ...form,
      university: value,
      department: null
    }
    const university = universities.find((e) => e.value === value);
    const departments = university.departments.map((department) => {
      return {
        value: department,
        name: department
      }
    });

    this.setState({form, departments});
  }
  // changeDepartment = (value) => {
  //   let { form } = this.state;
  //   form = {
  //     ...form,
  //     department: value
  //   }

  //   this.setState({form});
  // }
  // changeCity = (value) => {
  //   let { form } = this.state;
  //   form = {
  //     ...form,
  //     city: value
  //   }

  //   this.state({form})
  // }
  handleChangeForm = (value, key) => {
    let { form } = this.state;
    form = {
      ...form,
      [key]: value
    }

    this.setState({form});
  }
  render() {
    const { breakcrumb, universities, departments, cities, form } = this.state;
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
                          <p className="form__item__label">Ngày sinh <span className="form__required-char">*</span></p>
                          <DatePicker
                            selected={form.birthDay}
                            dateFormat="dd/MM/yyyy"
                            onChange={(value) => this.handleChangeForm(value, 'birthDay')}
                          />
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
                        <Selection value={form.university} options={universities} onChange={this.changeUniversity} />
                      </div>
                      <div className="form__item">
                        <p className="form__item__label">Khoa/ Chuyên ngành</p>
                        <Selection value={form.department} options={departments} onChange={(value) => this.handleChangeForm(value, 'department')} />
                      </div>
                      <div className="form__item">
                        <p className="form__item__label">Tỉnh thành <span className="form__required-char">*</span></p>
                        <Selection value={form.city} options={cities} onChange={(value) => this.handleChangeForm(value, 'city')} />
                      </div>

                      <div className="form__item">
                        <p className="form__item__label">Nghề nghiệp hiện tại <span className="form__required-char">*</span></p>
                        <input type="text" className="form__input" />
                      </div>

                      <div className="form__item">
                        <p className="form__item__label">Link facebook của bạn (Dùng để vào group của lớp học tập tương ứng) <span className="form__required-char">*</span></p>
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