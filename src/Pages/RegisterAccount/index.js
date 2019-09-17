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
// import Axios from "axios";
import { httpClient } from "../../api/Client";
import FormItem from "../../components/FormItem";
import Form from "../../components/Form";
import { ruleRequired, ruleDate } from "../../helpers";

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
      },
      rules: {
        fullName: [
          ruleRequired()
        ],
        password: [
          ruleRequired()
        ],
        birthDay: [
          ruleDate()
        ],
        gender: [
          ruleRequired()
        ],
        email: [
          ruleRequired()
        ],
        phone: [
          ruleRequired()
        ],
        city: [
          ruleRequired()
        ],
        currentJob: [
          ruleRequired()
        ],
        fbLink: [
          ruleRequired()
        ],
      }
    }

  }
  componentDidMount(){
    window.scroll(0, 0);
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

    this.setState({form}, () => {
      if (key === 'birthDay') {
        this.refs.form.validateField('birthDay');
      }
    });
  }

  toggleShowPassword = () => {
    this.setState({showPassword: !this.state.showPassword});
  }

  submit = () => {
    const { form } = this.state,
      { registerAccount } = httpClient().account,
      el = this.refs.form;

      el.validate(async (valid) => {
        if (valid) {
          //
          try {
            const data = await registerAccount(form)
            console.log('successfully!', data);
          } catch (error) {
            console.log(error);
          }
        }
        
        return;
      })
  }
  render() {
    const { breakcrumb, universities, departments, cities, form, showPassword, rules } = this.state;
      return (
          <Fragment>
              <Banner title="Đăng ký tài khoản" img={registerAccountImage} imgClassName="wrap-img-toiec" />
            <div className="acc-register">
              <Breadcrumb data={breakcrumb}/>
            </div>

            <section className="acc-register acc-register--padding">
                <div className="container">
                  {/* <form className="acc-register__wrap"> */}
                  <Form ref="form" className="acc-register__wrap" model={form} rules={rules}>

                    <p className="acc-register__title">Đăng ký thông tin của bạn</p>

                    <div className="form acc-register__form">
                      {/* <div className="form__item">
                        <p className="form__item__label">Tên đăng nhập <span className="form__required-char">*</span></p>
                        <input type="text" value={form.userName} onChange={(e) => this.handleChangeForm(e.target.value, 'userName') } className="form__input" />
                      </div> */}

                      <FormItem prop="fullName">
                        <p className="form__item__label">Họ tên <span className="form__required-char">*</span></p>
                        <input value={form.fullName} onChange={(e) => this.handleChangeForm(e.target.value, 'fullName') } type="text" className="form__input" />
                      </FormItem>

                      {/* <div className="form__item form__item--password"> */}
                      <FormItem className="form__item form__item--password" prop="password">
                        <p className="form__item__label">Mật khẩu <span className="form__required-char">*</span></p>
                        <input
                          autoComplete="none"
                          type={`${showPassword ? 'text' : 'password'}`}
                          className="form__input"
                          value={form.password}
                          onChange={(e) => this.handleChangeForm(e.target.value, 'password') }/>
                        <span onClick={() => this.toggleShowPassword()} className="icon icon__eye form__item__toggle-password"></span>
                      </FormItem>

                      <div className="row">
                        <div className="col-xs-12 col-sm-6">
                          <FormItem  className="form__item" prop="birthDay">
                            <p className="form__item__label">Ngày sinh <span className="form__required-char">*</span></p>
                            <DatePicker
                              selected={form.birthDay}
                              dateFormat="dd/MM/yyyy"
                              value={form.birthDay}
                              placeholderText="DD/MM/YYYY"
                              onChange={(value) => this.handleChangeForm(value, 'birthDay')}
                            />
                          </FormItem >
                        </div>
                        <div className="col-xs-12 col-sm-6">
                          <FormItem className="form__item acc-register__form__item-gender" prop="gender">
                            <p className="form__item__label">Giới tính <span className="form__required-char">*</span></p>
                            <div className="form__item__radio">
                              <input type="radio" name="gender" id="male" value="male" onChange={(e) => this.handleChangeForm(e.target.value, 'gender') } />
                              <label htmlFor="male">Male</label>
                            </div>
                            <div className="form__item__radio">
                              <input type="radio" name="gender" id="female" value="female" onChange={(e) => this.handleChangeForm(e.target.value, 'gender') } />
                              <label htmlFor="female">Female</label>
                            </div>
                          </FormItem>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-6">
                          <FormItem className="form__item" prop="email">
                            <p className="form__item__label">Email <span className="form__required-char">*</span></p>
                            <input value={form.email} onChange={(e) => this.handleChangeForm(e.target.value, 'email') } type="text" className="form__input" />
                          </FormItem>
                        </div>
                        <div className="col-sm-6">
                          <FormItem className="form__item" prop="phone">
                            <p className="form__item__label">Số điện thoại <span className="form__required-char">*</span></p>
                            <input value={form.phone} onChange={(e) => this.handleChangeForm(e.target.value, 'phone') } type="text" className="form__input" />
                          </FormItem>
                        </div>
                      </div>
                      
                      <div className="form__item">
                      <div className="form__item__label">Vui lòng chọn chính xác thông tin đối tượng người học để được áp dụng mức ký quỹ phù hợp.</div>
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
                          <input type="radio" name="target" id="person" value="person" onChange={(e) => this.handleChangeForm(e.target.value, 'jobType') } />
                          <label htmlFor="person">Người đi làm/ trên 25 tuổi</label>
                        </div>
                      </div>

                      {
                        form.jobType === "alumnus" && [
                          <div className="form__item" key="university">
                            <p className="form__item__label">Trường học</p>
                            <Selection size="medium" value={form.university} options={universities} onChange={this.changeUniversity} />
                          </div>,
                          <div className="form__item" key="departments">
                            <p className="form__item__label">Khoa/ Chuyên ngành</p>
                            <Selection size="medium" value={form.department} options={departments} onChange={(value) => this.handleChangeForm(value, 'department')} />
                          </div>

                        ]
                      }
                      <FormItem className="form__item" prop="city">
                        <p className="form__item__label">Tỉnh thành <span className="form__required-char">*</span></p>
                        <Selection size="medium" value={form.city} options={cities} onChange={(value) => this.handleChangeForm(value, 'city')} />
                      </FormItem>

                      {
                        form.jobType === "person" && 
                          <FormItem prop="currentJob" className="form__item">
                            <p className="form__item__label">Nghề nghiệp hiện tại <span className="form__required-char">*</span></p>
                            <input value={form.currentJob} onChange={(e) => this.handleChangeForm(e.target.value, 'currentJob') } type="text" className="form__input" />
                          </FormItem>
                      }

                      <FormItem className="form__item" prop="fbLink">
                        <p className="form__item__label">Link facebook của bạn (Dùng để vào group của lớp học tập tương ứng) <span className="form__required-char">*</span></p>
                        <input value={form.fbLink} onChange={(e) => this.handleChangeForm(e.target.value, 'fbLink') } type="text" className="form__input" />
                      </FormItem>

                      <div className="form__footer">
                        <button onClick={() => this.submit()} type="button" className="btn btn--gradient btn--radius">Gửi Đi<span className="icon icon__send"></span></button>
                        {/* <div className="form__item__label">Bạn đã có tài khoản? <Link to="#">Đăng nhập</Link></div> */}
                      </div>
                    </div>
                  
                  </Form>
                  {/* </form> */}
                </div>
            </section>

          </Fragment>
      );
  }
}

export default RegisterAccount