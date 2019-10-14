import React, { Component } from 'react';
import bgCourse from '../../assets/img/method-bg-1.png';
import bgOnline from '../../assets/img/program-english.png';
import bgTarget from '../../assets/img/method-bg-2.png';
import {  Link } from "react-router-dom";
// import bgPratice from '../../assets/img/method-bg-2.png';
// import bgevaluate from '../../assets/img/method-bg-3.png';
import './styles.scss';
class RegisterProcess extends Component {
    render() {
        return (
            <section className="process lazy-load" id="process">
                <div className="method">
                    <div className="container">
                        <p className="method__title">Quy trình đăng ký</p>

                        <div className="method__row">
                        <div className="method__left col-xs-12 col-sm-6 custom-position">
                            <p className="method__row__title">Bước 1: Đánh giá năng lực</p>
                          <p className="method__row__text">Trước khi học cùng dự án, học viên cần thực hiện bài kiểm tra đánh giá năng lực để biết được trình độ của mình. </p>
                          <br />
                          <p><Link className="btn btn--outline" to="/danh-gia-nang-luc">Làm tại đây</Link></p>
                        </div>
                        <div className="method__right col-xs-12 col-sm-6">
                            <img src={bgOnline} alt="about i-gen" className="method__img_register" />
                        </div>
                        </div>

                        <div className="method__row">
                        <div className="method__right col-xs-12 col-sm-6 custom-position">
                            <p className="method__row__title">Bước 2. Chọn lớp học và thời gian phù hợp</p>
                            <p className="method__row__text">Sau khi biết điểm thi đánh giá năng lực, học viên chọn lớp học phù hợp với trình độ và thời gian học.</p>
                        </div>
                        <div className="method__left col-xs-12 col-sm-6">
                            <img src={bgCourse} alt="about i-gen" className="method__img_register" />
                        </div>
                        </div>

                        <div className="method__row">
                        <div className="method__left col-xs-12 col-sm-6 custom-position">
                            <p className="method__row__title">Bước 3: Ký quỹ & mua sách</p>
                            <p className="method__row__text">Học viên thực hiện ký quỹ cam kết đồng hành cùng dự án, và mua sách để theo dõi bài giảng của giảng viên trong suốt quá trình học.</p>
                        </div>
                        <div className="method__right col-xs-12 col-sm-6">
                            <img src={bgTarget} alt="about i-gen" className="method__img_register" />
                        </div>
                        </div>
                        <div className="method__row btn-register-process">
                        <Link to="/danh-gia-nang-luc" className="btn btn--outline" rel="noopener noreferrer">Xem chi tiết <span className="icon icon__arrow"></span></Link>
                        </div>
                      <hr className="method__line"/>
                    </div>
                </div>
            </section>
        );
    }
}

export default RegisterProcess;