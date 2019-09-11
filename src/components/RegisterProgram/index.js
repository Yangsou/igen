import React, { Component } from 'react';
import descriptionImage1 from '../../assets/img/description1.png';
import descriptionImage2 from '../../assets/img/description2.png';
import descriptionImage3 from '../../assets/img/description3.png';
import './styles.scss'
class RegisterPrograming extends Component {
    render() {
        const { title } = this.props;
        return (
            <section className="container">
                <div className="description-box">
                    <h3>cách thức đăng kí chương trình</h3>
                    <h1>{title}</h1>
                    <p>Căn cứ vào kết quả kiểm tra trình độ đầu vào và kế hoạch của bạn, i-Gen sẽ tư vấn khóa học và lộ trình phù hợp
                        để bạn có thể đạt được mục tiêu trong thời gian ngắn nhất với kết quả cao nhất. <br/>
                        Tất cả những gì bạn cần để thực hiện chỉ là: 
                    </p>
                </div>
                <div className="description-step row">
                    <div className="description-step-item col col-sm-4 ">
                        <figure >
                            <div className="wrap-img">
                                <img src={descriptionImage1} alt=""  />
                            </div>
                            <figcaption>Tham gia học tập đầy đủ các buổi trên lớp.</figcaption>
                        </figure>
                    </div>
                    <div className="description-step-item col col-sm-4">
                        <figure>
                            <div className="wrap-img">
                                <img src={descriptionImage2} alt=""  /> 
                            </div>
                            <figcaption>Rèn luyện bài tập về nhà sau từng buổi.</figcaption>
                        </figure>
                    </div>
                    <div className="description-step-item col col-sm-4 ">
                        <figure>
                            <div className="wrap-img">
                                <img src={descriptionImage3} alt=""  />
                            </div>
                            <figcaption>Chăm chỉ học tập, phát biểu theo hướng dẫn của giáo viên.</figcaption>
                        </figure>
                    </div>
                    
                </div>
            </section>
        );
    }
}

export default RegisterPrograming;