import React, { Component } from 'react';
import prepareIcon1 from '../../../assets/img/prepare-icon-1.png';
import prepareIcon2 from '../../../assets/img/prepare-icon-2.png';
import prepareIcon3 from '../../../assets/img/prepare-icon-3.png';
import prepareIcon4 from '../../../assets/img/prepare-icon-4.png';
import './styles.scss'
class RegisterPrograming extends Component {
    render() {
        return (
            <section className="container wrap-prepare-test">
                <div className="description-box">
                    <h1>Bạn cần chuẩn bị</h1>
                    <p>Bạn cần thực hiện bài kiểm tra đầu vào để tìm thấy lớp học phù hợp. 
                        Kết quả của bài kiểm tra sẽ ảnh hưởng trực tiếp đến việc đánh giá, và xếp bạn vào các lớp học. 
                        Do đó, trước khi bắt đầu, bạn vui lòng chuẩn bị:
                    </p>
                </div>
                <div className="description-step description-step__row">
                    <div className="description-step-item col-sm-6 col-md-3">
                        <figure >
                            <div className="wrap-img">
                                <img src={prepareIcon1} alt=""  />
                            </div>
                            <figcaption>
                                Kiểm tra tai nghe rõ ràng. 
                                        Mạng internet, wifi ổn định
                            </figcaption>
                        </figure>
                    </div>
                    <div className="description-step-item col-sm-6 col-md-3">
                        <figure>
                            <div className="wrap-img">
                                <img src={prepareIcon2} alt=""  />
                            </div>
                            <figcaption>
                            Không gian yên tĩnh
                                
                            </figcaption>
                        </figure>
                    </div>
                    <div className="description-step-item col-sm-6 col-md-3">
                        <figure>
                            <div className="wrap-img">
                                <img src={prepareIcon3} alt=""  />
                            </div>
                            <figcaption>
                            Sử dụng trình duyệt Google Chrome để trải nghiệm tốt nhất.
                                <a href="https://www.google.com/chrome/"> Download tại đây</a>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="description-step-item col-sm-6 col-md-3">
                        <figure>
                            <div className="wrap-img">
                                <img src={prepareIcon4} alt=""  />
                            </div>
                            <figcaption>
                                Bài kiểm tra không tương thích với thiết bị di động, bạn cần sử dụng laptop hoặc máy tính để bàn
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </section>
        );
    }
}

export default RegisterPrograming;