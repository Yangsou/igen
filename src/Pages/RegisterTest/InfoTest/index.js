import React, { Component } from 'react';
import icon1 from '../../../assets/img/icon-info-test-01.png';
import icon2 from '../../../assets/img/icon-info-test-2.png';
import icon3 from '../../../assets/img/icon-info-test-3.png';
import icon4 from '../../../assets/img/icon-info-test-4.png';
import './styles.scss'
class InfoTest extends Component {
    render() {
        return (
            <section className="container info-test">
                
                    <div className="info-test__wrap">
                        <div className="info-test__wrap-title">
                            <h3 className="info-test__title">
                                Thông tin về bài kiểm tra đầu vào
                            </h3>
                        </div>
                        <hr/>
                    </div>
                <div className="info-test-wrap info-test__row">
                    <div className="item col-xs-12 col-sm-6 col-md-3">
                        <div className="item__wrap wrap-first">
                            <div className="item__icon wrap-first">
                                <div className="item__icon__img">
                                    <img src={icon1} alt="" />
                                </div>
                            </div>
                            <div className="item__content">
                                <div className="item__title">
                                    THỜI GIAN
                                </div>
                                <div className="item__text">
                                    60 phút
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item col-xs-12 col-sm-6 col-md-3">
                        <div className="item__wrap wrap-second">
                            <div className="item__icon wrap-second">
                                <div className="item__icon__img">
                                    <img src={icon2} alt="" />
                                </div>
                            </div>
                            <div className="item__content">
                                <div className="item__title">
                                    SỐ LẦN THỰC HIỆN
                                </div>
                                <div className="item__text">
                                    Không giới hạn. Hệ thống sẽ lưu lại số điểm cao nhất
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item col-xs-12 col-sm-6 col-md-3">
                        <div className="item__wrap wrap-third">
                            <div className="item__icon wrap-third">
                                <div className="item__icon__img">
                                    <img src={icon3} alt="" />
                                </div>
                            </div>
                            <div className="item__content">
                                <div className="item__title">
                                    ĐỊA ĐIỂM
                                </div>
                                <div className="item__text">
                                    100% Online
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item col-xs-12 col-sm-6 col-md-3">
                        <div className="item__wrap wrap-four">
                            <div className="item__icon wrap-four">
                                <div className="item__icon__img">
                                    <img src={icon4} alt="" />
                                </div>
                            </div>
                            <div className="item__content">
                                <div className="item__title">
                                    HÌNH THỨC
                                </div>
                                <div className="item__text">
                                    Trắc nghiệm kết hợp tự luận
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default InfoTest;