import { omit, cloneDeep } from 'lodash';
import React, { Component, Fragment } from 'react';
import Banner from '../../components/Banner';
import registerAccountImage from '../../assets/img/register-account.svg';
import './styles.scss';
import Breadcrumb from '../../components/Breakcrumb';
import universities from '../../universities.json';
import cities from '../../cities.json';
import Selection from "../../components/Selection";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { httpClient } from "../../api/Client";
import FormItem from "../../components/FormItem";
import Form from "../../components/Form";
import { ruleRequired } from "../../helpers";

function converUniversity(universities) {
  const u = [];
  universities.map((e) => {
    u.push({
      ...e,
      value: e.name
    })
    return e;
  });
  u.push({
    value: 'other',
    name: 'Other'
  })
  return u;
}

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
      universities: converUniversity(universities),
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
        courseId: window.location.href.split('=').pop() || 'toeic',
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
        birthDay: '',
        cloneUniversity: '',
        cloneDepartment: ''
      },
      rules: {
        fullName: [
          ruleRequired()
        ],
        password: [
          ruleRequired()
        ],
        birthDay: [
          ruleRequired()
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
        cloneUniversity: [
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
      department: null,
      cloneDepartment: '',
      cloneUniversity: ''
    }
    if (value === 'other') {
      this.setState({form});

      return;
    }
    const university = value ? universities.find((e) => e.value === value) : [];
    const departments = university.departments.map((department) => {
      return {
        value: department,
        name: department
      }
    });
    departments.push({
      value: 'other',
      name: 'Other'
    })

    this.setState({form, departments});
  }
  handleChangeForm = (value, key) => {
    let { form } = this.state;
    if (key === 'department') {
      form.cloneDepartment = '';
    }
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
    const { form } = cloneDeep(this.state),
      { registerAccount } = httpClient().account,
      el = this.refs.form;
      if (form.cloneUniversity) {
        form.university = form.cloneUniversity;
      }
      if (form.cloneDepartment) {
        form.department = form.cloneDepartment;
      }

      el.validate(async (valid) => {
        if (valid) {
          //
          try {
            const data = await registerAccount(omit(form, ['cloneDepartment', 'cloneUniversity']))
            if(data && data.data){
              window.location.href = data.data
            }
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
                            <input value={form.birthDay} onChange={(e) => this.handleChangeForm(e.target.value, 'birthDay') } placeholder="DD/MM/YYYY" type="text" className="form__input" />
                            {/* <DatePicker
                              selected={form.birthDay}
                              dateFormat="dd/MM/yyyy"
                              value={form.birthDay}
                              placeholderText="DD/MM/YYYY"
                              onChange={(value) => this.handleChangeForm(value, 'birthDay')}
                            /> */}
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
                          (
                            form.university === 'other' && 
                            <FormItem className="form__item" prop="cloneUniversity" key="cloneUniversity">
                              <p className="form__item__label">Trường học <span className="form__required-char">*</span></p>
                              <input value={form.cloneUniversity} onChange={(e) => this.handleChangeForm(e.target.value, 'cloneUniversity') } type="text" className="form__input" />
                            </FormItem>
                          ),
                          <div className="form__item" key="departments">
                            <p className="form__item__label">Khoa/ Chuyên ngành</p>
                            <Selection disabled={!form.university || form.university === 'other'} size="medium" value={form.department} options={departments} onChange={(value) => this.handleChangeForm(value, 'department')} />
                          </div>,
                          (
                            (form.university === 'other' || form.department === 'other') &&
                            <FormItem className="form__item" prop="cloneDepartment" key="cloneDepartment">
                              <p className="form__item__label">Khoa/ Chuyên ngành</p>
                              <input value={form.cloneDepartment} onChange={(e) => this.handleChangeForm(e.target.value, 'cloneDepartment') } type="text" className="form__input" />
                            </FormItem>
                          )

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
                        <button onClick={() => this.submit()} type="button" className="submit-register-form btn btn--gradient btn--radius">Gửi Đi<span className="icon icon__send"></span></button>
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