import { Link } from "react-router-dom";
import React, { Component, Fragment } from 'react';
import Banner from '../../components/Banner';
import registerAccountImage from '../../assets/img/register-account.svg';
import './styles.scss';
import Breadcrumb from '../../components/Breakcrumb';
import universities from '../../universities.json';
import cities from '../../cities.json';
import Selection from "../../components/Selection";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Axios from "axios";

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
      cities: cities.map((e) => {
        return {
          ...e,
          value: e.name
        }
      }),
      showPassword: false,
      form: {
        // userName: '',
        courseId: 'toiec',
        email: '',
        password: '',
        fullName: '',
        gender: '',
        phone: '',
        jobType: '',
        currentJob: '',
        fbLink: '',
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
  handleChangeForm = (value, key) => {
    let { form } = this.state;
    form = {
      ...form,
      [key]: value
    }

    this.setState({form});
  }

  toggleShowPassword = () => {
    this.setState({showPassword: !this.state.showPassword});
  }

  submit = () => {
    const { form } = this.state;
    console.log('form', form);

    return Axios({
      method: 'post',
      data: form,
      url: 'https://vsn.edu.vn/api/registry-igen',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(() => {
      console.log('successfully!');
    })
    .catch((error) => {
        console.log(error);
    });
  }
  render() {
    const { breakcrumb, universities, departments, cities, form, showPassword } = this.state;
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
                      {/* <div className="form__item">
                        <p className="form__item__label">Tên đăng nhập <span className="form__required-char">*</span></p>
                        <input type="text" value={form.userName} onChange={(e) => this.handleChangeForm(e.target.value, 'userName') } className="form__input" />
                      </div> */}
                      <div className="form__item">
                        <p className="form__item__label">Họ tên <span className="form__required-char">*</span></p>
                        <input value={form.fullName} onChange={(e) => this.handleChangeForm(e.target.value, 'fullName') } type="text" className="form__input" />
                      </div>
                      <div className="form__item form__item--password">
                        <p className="form__item__label">Mật khẩu <span className="form__required-char">*</span></p>
                        <input
                          autoComplete="none"
                          type={`${showPassword ? 'text' : 'password'}`}
                          className="form__input"
                          value={form.password}
                          onChange={(e) => this.handleChangeForm(e.target.value, 'password') }/>
                        <span onClick={() => this.toggleShowPassword()} className="icon icon__eye form__item__toggle-password"></span>
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
                        <div className="form__item acc-register__form__item-gender col-xs-6">
                          <p className="form__item__label">Giới tính <span className="form__required-char">*</span></p>
                          <div className="form__item__radio">
                            <input type="radio" name="gender" id="male" value="male" onChange={(e) => this.handleChangeForm(e.target.value, 'gender') } />
                            <label htmlFor="male">Male</label>
                          </div>
                          <div className="form__item__radio">
                            <input type="radio" name="gender" id="female" value="female" onChange={(e) => this.handleChangeForm(e.target.value, 'gender') } />
                            <label htmlFor="female">Female</label>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="form__item col-xs-6">
                          <p className="form__item__label">Email <span className="form__required-char">*</span></p>
                          <input value={form.email} onChange={(e) => this.handleChangeForm(e.target.value, 'email') } type="text" className="form__input" />
                        </div>
                        <div className="form__item col-xs-6">
                          <p className="form__item__label">Số điện thoại <span className="form__required-char">*</span></p>
                          <input value={form.phone} onChange={(e) => this.handleChangeForm(e.target.value, 'phone') } type="text" className="form__input" />
                        </div>
                      </div>
                      
                      <div className="form__item">
                      <div className="form__item__label">Vui lòng chọn chính xác thông tin đối tượng người học để được áp dụng mức ký quỹ phù hợp. <Link to="#">Xem thêm tại đây</Link></div>
                      </div>

                      <div className="form__item">
                        <div className="form__item__radio">
                          <input type="radio" name="target" id="student" value="student" onChange={(e) => this.handleChangeForm(e.target.value, 'jobType') }/>
                          <label htmlFor="student">Học sinh</label>
                          </div>
                        <div className="form__item__radio">
                          <input type="radio" name="target" id="alumnus" value="alumnus" onChange={(e) => this.handleChangeForm(e.target.value, 'jobType') } />
                          <label htmlFor="alumnus">Sinh viên</label>
                        </div>
                        <div className="form__item__radio">
                          <input type="radio" name="target" id="person" value="person" onChange={(e) => this.handleChangeForm(e.target.value, 'person') } />
                          <label htmlFor="person">Người đi làm/ trên 25 tuổi</label>
                        </div>
                      </div>

                      <div className="form__item">
                        <p className="form__item__label">Trường học</p>
                        <Selection size="medium" value={form.university} options={universities} onChange={this.changeUniversity} />
                      </div>
                      <div className="form__item">
                        <p className="form__item__label">Khoa/ Chuyên ngành</p>
                        <Selection size="medium" value={form.department} options={departments} onChange={(value) => this.handleChangeForm(value, 'department')} />
                      </div>
                      <div className="form__item">
                        <p className="form__item__label">Tỉnh thành <span className="form__required-char">*</span></p>
                        <Selection size="medium" value={form.city} options={cities} onChange={(value) => this.handleChangeForm(value, 'city')} />
                      </div>

                      <div className="form__item">
                        <p className="form__item__label">Nghề nghiệp hiện tại <span className="form__required-char">*</span></p>
                        <input value={form.currentJob} onChange={(e) => this.handleChangeForm(e.target.value, 'currentJob') } type="text" className="form__input" />
                      </div>

                      <div className="form__item">
                        <p className="form__item__label">Link facebook của bạn (Dùng để vào group của lớp học tập tương ứng) <span className="form__required-char">*</span></p>
                        <input value={form.fbLink} onChange={(e) => this.handleChangeForm(e.target.value, 'fbLink') } type="text" className="form__input" />
                      </div>

                      <div className="form__footer">
                        <button onClick={() => this.submit()} type="button" className="btn btn--gradient btn--radius">Gửi Đi<span className="icon icon__send"></span></button>
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