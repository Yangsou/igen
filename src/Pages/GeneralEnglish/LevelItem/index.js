import React, { Component, Fragment } from 'react';
import Modal from '../../../components/Modal'
import iconA1 from '../../../assets/img/icon-A1.png';
import iconA2 from '../../../assets/img/icon-A2.png';
import iconB1 from '../../../assets/img/icon-B1.png';
import iconB2 from '../../../assets/img/icon-B2.png';
import iconC1 from '../../../assets/img/icon-C1.png';
import iconC2 from '../../../assets/img/icon-C2.png';
import imgA1 from '../../../assets/img/GE-A1.png'
import imgA2 from '../../../assets/img/GE-A2.png'
import imgB1 from '../../../assets/img/GE-B1.png'
import imgB2 from '../../../assets/img/GE-B2.png'
import imgC1 from '../../../assets/img/GE-C1.png'
import imgC2 from '../../../assets/img/GE-C2.png'
import iconList from './../../../assets/img/check-arround.png';

import './styles.scss'
class LevelItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            show : false,
            img : imgA1
        }
    }
    componentDidMount(){
        window.scroll(0, 0);
    }
    showModal = (img) => {
        this.setState({ 
            show: true,
            img
         });
      };
    
      hideModal = () => {
        this.setState({ show: false });
      }
    render() {
        return (
            <Fragment>
                <section className="container-fluid bg-row">
                    <div className="container">
                        <div className="row pt-80">
                            <div className="col-sm-6">
                                <div className="card-level">
                                    <div className="card-box">
                                        <img className="card-level-img" src={iconA1} alt="" />
                                        <h1 className="card-level-title">Trình độ A1</h1>
                                        <p className="card-level-description">
                                            Đây là thời điểm phát triển kỹ năng ngôn ngữ ở giai đoạn <strong>MỚI BẮT ĐẦU</strong>.
                                            Ở trình độ này, người học sẽ có khả năng sử dụng tiếng Anh tương đương với trẻ 3 - 4 tuổi người bản xứ,
                                            nơi tiếng Anh là ngôn ngữ mẹ đẻ.
                                        </p>
                                        <ul className="card-level-list">
                                            <li>
                                                <img className="img-icon" src={iconList} alt="" />
                                                <div className="card-level-list-item">
                                                    Hiểu và biết cách sử dụng những từ ngữ và cụm từ diễn tả những
                                                    việc hằng ngày
                                                </div>
                                            </li>
                                            <li>
                                                <img className="img-icon" src={iconList} alt="" />
                                                <div className="card-level-list-item">
                                                    Tự giới thiệu bản thân và giới thiệu về người khác.
                                                </div>
                                            </li>
                                            <li>
                                                <img className="img-icon" src={iconList} alt="" />
                                                <div className="card-level-list-item">
                                                    Nói về nơi mình đang sinh sống, những người quen biết và những
                                                    vật dụng xung quanh
                                                </div>
                                            </li>
                                            <li>
                                                <img className="img-icon" src={iconList} alt="" />
                                                <div className="card-level-list-item">
                                                    Vẫn cần người đối thoại phải nói chậm, rõ ràng và sẵn sàng giúp đỡ,
                                                    hỗ trợ
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="wrap-button">
                                            <button onClick={() => this.showModal(imgA1)} className="btn btn--outline" rel="noopener noreferrer">Xem chi tiết lộ trình học<span className="icon icon__arrow"></span></button>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className="col-sm-6">
                                <div className="card-level">
                                    <div className="card-box">
                                        <img className="card-level-img" src={iconA2} alt="" />
                                        <h1 className="card-level-title">Trình độ A2</h1>
                                        <p className="card-level-description">
                                            Ở trình độ A2, kỹ năng ngôn ngữ của bạn đã ở mức <strong>GIAO TIẾP CƠ BẢN</strong> hàng ngày.
                                            Khả năng sử dụng tiếng Anh giai đoạn này tương đương với trẻ 6 – 10 tuổi người bản xứ,
                                            nơi tiếng Anh là ngôn ngữ mẹ đẻ
                                        </p>
                                        <ul className="card-level-list">
                                            <li>
                                                <img className="img-icon" src={iconList} alt="" />
                                                <div className="card-level-list-item">
                                                    Sử dụng những câu đơn giản để trả lời các câu hỏi về các chủ đề phổ
                                                    biến trong cuộc sống
                                                </div>
                                            </li>
                                            <li>
                                                <img className="img-icon" src={iconList} alt="" />
                                                <div className="card-level-list-item">
                                                    Đặt các món ăn trong nhà hàng hoặc mua sắm
                                                </div>
                                            </li>
                                            <li>
                                                <img className="img-icon" src={iconList} alt="" />
                                                <div className="card-level-list-item">
                                                    Nói về những điều mình thích và không thích, các chủ đề về gia đình,
                                                    các thói quen hàng ngày trong cuộc sống
                                                </div>
                                            </li>

                                        </ul>
                                        <div className="wrap-button">
                                            <button onClick={() => this.showModal(imgA2)} className="btn btn--outline" rel="noopener noreferrer">Xem chi tiết lộ trình học<span className="icon icon__arrow"></span></button>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                <section className="container-fluid">
                    <div className="container">
                        <div className="row pt-80">
                            <div className="col-sm-6">
                                <div className="card-level">
                                    <div className="card-box card-box-certificate-b">
                                        <img className="card-level-img" src={iconB1} alt="" />
                                        <h1 className="card-level-title">Trình độ B1</h1>
                                        <div className="box-same-certificate ">
                                            <h5>TƯƠNG ĐƯƠNG</h5>
                                            <p>
                                                IELTS 3.0 - 3.5    <span> - </span>   TOEIC 220 - 395    <span>-</span>   TOEFL 30 - 34
                                            </p>
                                        </div>
                                        <p className="card-level-description">
                                        Kỹ năng ngôn ngữ ở trình độ B1 sẽ giúp bạn sử dụng tiếng Anh tương đương 
                                        với học sinh 16 – 18 tuổi người bản xứ, nơi tiếng Anh là ngôn 
                                            ngữ mẹ đẻ           
                                        </p>
                                        <ul className="card-level-list">
                                            <li>
                                                <img className="img-icon" src={iconList} alt="" />
                                                <div className="card-level-list-item">
                                                Hiểu những điểm chính được diễn đạt chuẩn và rõ ràng về những vấn 
                                                    đề quen thuộc thường gặp trong công việc, học tập, giải trí,...
                                                </div>
                                            </li>
                                            <li>
                                                <img className="img-icon" src={iconList} alt="" />
                                                <div className="card-level-list-item">
                                                Đối phó với hầu hết các tình huống có thể phát sinh khi đến một nơi mà 
                                                        tiếng Anh được sử dụng
                                                </div>
                                            </li>
                                            <li>
                                                <img className="img-icon" src={iconList} alt="" />
                                                <div className="card-level-list-item">
                                                Viết các nội dung đơn giản có kết nối về các chủ đề quen thuộc hoặc về 
                                                    sở thích cá nhân
                                                </div>
                                            </li>
                                            <li>
                                                <img className="img-icon" src={iconList} alt="" />
                                                <div className="card-level-list-item">
                                                Mô tả các kinh nghiệm và sự kiện, ước mơ, hy vọng và hoài bão và đưa 
                                                    ra lý do, giải thích ngắn gọn cho các ý kiến ​​và kế hoạch
                                                </div>
                                            </li>
                                            
                                        </ul>
                                        <div className="wrap-button">
                                            <button onClick={() => this.showModal(imgB1)} className="btn btn--outline" rel="noopener noreferrer">Xem chi tiết lộ trình học<span className="icon icon__arrow"></span></button>

                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className="col-sm-6">
                                <div className="card-level">
                                    <div className="card-box card-box-certificate-b">
                                        <img className="card-level-img" src={iconB2} alt="" />
                                        <h1 className="card-level-title">Trình độ B2</h1>
                                        <div className="box-same-certificate ">
                                            <h5>TƯƠNG ĐƯƠNG</h5>
                                            <p>
                                            IELTS 3.5 - 4.0    <span>-</span>   TOEIC 400 - 515    <span>-</span>   TOEFL 35 - 40
                                            </p>
                                        </div>
                                        <p className="card-level-description">
                                        Kỹ năng ngôn ngữ ở trình độ B2 sẽ giúp bạn sử dụng tiếng Anh 
                                            tương đương với người bản xứ 25 tuổi, nơi tiếng Anh 
                                            là ngôn ngữ mẹ đẻ
                                        </p>
                                        <ul className="card-level-list">
                                            <li>
                                                <img className="img-icon" src={iconList} alt="" />
                                                <div className="card-level-list-item">
                                                Tự tin thảo luận về các vấn đề chuyên môn mà mình có kiến thức
                                                </div>
                                            </li>
                                            <li>
                                                <img className="img-icon" src={iconList} alt="" />
                                                <div className="card-level-list-item">
                                                    Giao tiếp lưu loát và ngẫu hứng
                                                </div>
                                            </li>
                                            <li>
                                                <img className="img-icon" src={iconList} alt="" />
                                                <div className="card-level-list-item">
                                                     Kỹ năng nói và viết tốt trong hầu hết các chủ đề
                                                </div>
                                            </li>

                                        </ul>
                                        <div className="wrap-button">

                                            <button onClick={() => this.showModal(imgB2)} className="btn btn--outline" rel="noopener noreferrer">Xem chi tiết lộ trình học<span className="icon icon__arrow"></span></button>

                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                <section className="container-fluid bg-row">
                    <div className="container">
                        <div className="row pt-80">
                            <div className="col-sm-6">
                                <div className="card-level">
                                    <div className="card-box card-box-certificate-c">
                                        <img className="card-level-img" src={iconC1} alt="" />
                                        <h1 className="card-level-title">Trình độ C1</h1>
                                        <div className="box-same-certificate ">
                                            <h5>TƯƠNG ĐƯƠNG</h5>
                                            <p>
                                            IELTS 4.5-5.0    <span>-</span>   TOEIC 520-600    <span>-</span>   TOEFL 41-50
                                            </p>
                                        </div>
                                        <p className="card-level-description">
                                            Kỹ năng ngôn ngữ ở trình độ C1 sẽ giúp bạn có khả năng sử dụng tiếng Anh tương đương với người bản xứ 40 tuổi,
                                            nơi tiếng Anh là ngôn ngữ mẹ đẻ. Những kỹ năng và chủ đề mà bạn có thể tự tin giao tiếp bao gồm:
                                        </p>
                                        <ul className="card-level-list">
                                            <li>
                                                <img className="img-icon" src={iconList} alt="" />
                                                <div className="card-level-list-item">
                                                    Hiểu được nhiều loại văn bản dài và khó hiểu, và nhận ra ý nghĩa tiềm ẩn
                                                </div>
                                            </li>
                                            <li>
                                                <img className="img-icon" src={iconList} alt="" />
                                                <div className="card-level-list-item">
                                                     Diễn đạt các ý tưởng một cách trôi chảy và tự nhiên mà không bộc lộ rõ 
                                                        việc đang tìm từ ngữ
                                                </div>
                                            </li>
                                            <li>
                                                <img className="img-icon" src={iconList} alt="" />
                                                <div className="card-level-list-item">
                                                    Sử dụng ngôn ngữ một cách linh hoạt và hiệu quả cho các mục đích xã 
                                                    hội, học thuật và công việc
                                                </div>
                                            </li>
                                            <li>
                                                <img className="img-icon" src={iconList} alt="" />
                                                <div className="card-level-list-item">
                                                Viết các văn bản rõ ràng, chi tiết và có cấu trúc tốt về các chủ đề phức 
                                                    tạp, làm chủ việc sử dụng các mô hình tổ chức, từ nối và phương tiện 
                                                    liên kết
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="wrap-button">
                                        <div className="btn-box">
                                            <button onClick={() => this.showModal(imgC1)} className="btn btn--outline" rel="noopener noreferrer">Xem chi tiết lộ trình học<span className="icon icon__arrow"></span></button>
                                        </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className="col-sm-6">
                                <div className="card-level">
                                    <div className="card-box card-box-certificate-c">
                                        <img className="card-level-img" src={iconC2} alt="" />
                                        <h1 className="card-level-title">Trình độ C2</h1>
                                        <div className="box-same-certificate ">
                                            <h5>TƯƠNG ĐƯƠNG</h5>
                                            <p>
                                            IELTS 5.0-5.5    <span>-</span>   TOIEC 605-700 <span>-</span> TOEFL 53-64
                                            </p>
                                        </div>
                                        <p className="card-level-description">
                                         Kỹ năng ngôn ngữ ở trình độ C2 sẽ giúp bạn có khả năng sử dụng tiếng Anh 
                                            tương đương với người bản xứ, nơi tiếng Anh là ngôn ngữ mẹ đẻ. 
                                            Những kỹ năng và chủ đề mà bạn có thể tự tin giao tiếp bao gồm:
                                        </p>
                                        <ul className="card-level-list">
                                            <li>
                                                <img className="img-icon" src={iconList} alt="" />
                                                <div className="card-level-list-item">
                                                    Trao đổi về các vấn đề liên quan đến khoa học và công nghệ, gồm cả 
                                                        robot và những phát minh mới
                                                </div>
                                            </li>
                                            <li>
                                                <img className="img-icon" src={iconList} alt="" />
                                                <div className="card-level-list-item">
                                                Nói về những người nổi tiếng, hoạt động xã hội của người nổi tiếng và 
                                                    tán ngẫu về họ
                                                </div>
                                            </li>
                                            <li>
                                                <img className="img-icon" src={iconList} alt="" />
                                                <div className="card-level-list-item">
                                                Sử dụng nhiều kỹ thuật để thúc đẩy sự sáng tạo của bạn khi nói và viết
                                                </div>
                                            </li>
                                            <li>
                                                <img className="img-icon" src={iconList} alt="" />
                                                <div className="card-level-list-item">
                                                Trao đổi về kế hoạch tài chính, đưa ra và hiểu những lời khuyên về tài 
                                                    chính cá nhân
                                                </div>
                                            </li>
                                            <li>
                                                <img className="img-icon" src={iconList} alt="" />
                                                <div className="card-level-list-item">
                                                    Nói về căng thẳng trong cuộc sống của bạn cũng như cuộc sống của 
                                                    bạn bè và đồng nghiệp
                                                </div>
                                            </li>
                                            <li>
                                                <img className="img-icon" src={iconList} alt="" />
                                                <div className="card-level-list-item">
                                                    Trao đổi về các kỹ thuật để làm nghiên cứu về nhiều chủ đề đa dạng
                                                </div>
                                            </li>

                                        </ul>
                                        <div className="wrap-button">
                                            <button onClick={() => this.showModal(imgC2)} className="btn btn--outline" rel="noopener noreferrer">Xem chi tiết lộ trình học<span className="icon icon__arrow"></span></button>

                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                    <Modal show={this.state.show} img={this.state.img} hideModal={this.hideModal} />
                </section>
            </Fragment>
            
        );
    }
}

export default LevelItem;