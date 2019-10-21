import React, { Component} from 'react';
import iconList from './../../../../assets/img/check-arround.png';
import './../../../PracticeIELTS/LevelItem/styles.scss';
import './styles.scss';
class LevelItem extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render() {
        const { level } = this.props;
        return (
                <section className="item__level_ielts">
                    <section className="container-fluid bg-row">
                        <div className="container">
                            <div className="row wrap-flex-center">
                                {level==='5'?<div className="col-sm-6">
                                    <div className="card-level card-level-sub">
                                        <div className="card-box card-box-sub">
                                            <h1 className="card-level-title">Cấp độ 5.0+</h1>
                                            <p className="card-level-description">
                                            Các bạn đã có một nền tảng tiếng Anh ở mức khá nhưng chưa thành hệ thống, mới làm quen với IELTS,
                                            và cũng chưa biết bắt đầu từ đâu để "bứt phá" điểm IELTS.
                                            </p>
                                            <h1 className="card-level-title--content">Nội dung</h1>
                                            <ul className="card-level-list pb-0 card-level-list-content">
                                                <li>
                                                    <img className="img-icon" src={iconList} alt="" />
                                                    <div className="card-level-list-item">
                                                    Giới thiệu <strong>tổng quan</strong> về hình thức của bài thi IELTS và kết hợp với việc hoàn thiện những kỹ năng làm bài thi <strong>cơ bản.</strong>
                                                    </div>
                                                </li>
                                                <li>
                                                    <img className="img-icon" src={iconList} alt="" />
                                                    <div className="card-level-list-item">
                                                    Phát triển từ vững, thực hành những chủ đề IELTS <strong>thường gặp</strong> như: 
                                                        Giáo dục, Sức khỏe, Truyền thông đại chúng, môi trường.
                                                    </div>
                                                </li>
                                                
                                            </ul>
                                            <h1 className="card-level-title--content">Kết quả đầu ra</h1>
                                            <ul className="card-level-list">
                                                <li>
                                                    <img className="img-icon" src={iconList} alt="" />
                                                    <div className="card-level-list-item">
                                                        <strong>Listening:</strong> Học sâu hơn về các dạng bài, phân tích những lỗi sai thường gặp. 
                                                        Tìm hiểu những câu hỏi hay gặp, chủ điểm thường xuất hiện nhiều.
                                                    </div>
                                                </li>
                                                <li>
                                                    <img className="img-icon" src={iconList} alt="" />
                                                    <div className="card-level-list-item">
                                                    <strong>Reading:</strong> Tìm kiếm thông tin nhanh, phân tích làm các bài đọc dài, 
                                                        cung cấp nguồn từ vựng học thuật nâng cao theo chủ đề.
                                                    </div>
                                                </li>
                                                <li>
                                                    <img className="img-icon" src={iconList} alt="" />
                                                    <div className="card-level-list-item">
                                                    <strong>Writing:</strong> Biết viết các câu đơn, kết hợp câu dài, phức và đoạn văn dài, logic hơn. 
                                                        Hiểu rõ các dạng bản đồ, thực hành phân tích, viết bài.
                                                    </div>
                                                </li>
                                                <li>
                                                    <img className="img-icon" src={iconList} alt="" />
                                                    <div className="card-level-list-item">
                                                    <strong>Speaking:</strong> Phát âm chuẩn các âm cơ bản, luyện ngữ điệu nói, trả lời các dạng câu hỏi đơn giản nhất.
                                                    </div>
                                                </li>
                                                
                                            </ul>
                                        </div>

                                    </div>

                                </div>:''}
                                {level==='6'?<div className="col-sm-6">
                                    <div className="card-level card-level-sub">
                                        <div className="card-box card-box-sub">
                                            <h1 className="card-level-title">Cấp độ 6.0+</h1>
                                            <p className="card-level-description">
                                                Học viên đã có khả năng giao tiếp, từ vựng ngữ pháp và phát âm tốt, có khả năng viết đoạn và nói được các chủ đề học thuật.
                                            </p>
                                            <h1 className="card-level-title--content">Nội dung</h1>
                                            <ul className="card-level-list pb-0 card-level-list-content">
                                                <li>
                                                    <img className="img-icon" src={iconList} alt="" />
                                                    <div className="card-level-list-item">
                                                        Trang bị kiến thức <strong>tổng quát</strong> về kỳ thi IELTS và 
                                                        phát triển <strong>toàn diện</strong> kỹ năng ngôn ngữ, chiến lược làm bài thi IELTS cho học viên.
                                                    </div>
                                                </li>
                                                <li>
                                                    <img className="img-icon" src={iconList} alt="" />
                                                    <div className="card-level-list-item">
                                                        Phát triển từ vựng, thực hành các chủ đề IELTS <strong>quan trọng</strong> như:
                                                        Môi trường, Công nghệ, Khoa học tự nhiên, Giáo dục – Việc làm, và Xã hội.
                                                    </div>
                                                </li>
                                            </ul>
                                            <h1 className="card-level-title--content">Kết quả đầu ra</h1>
                                            <ul className="card-level-list">
                                                <li>
                                                    <img className="img-icon" src={iconList} alt="" />
                                                    <div className="card-level-list-item">
                                                        <strong>Listening:</strong> Hiểu rõ các dạng bài trong IELTS, tận dụng thời gian làm bài,
                                                        thời gian trống giữa các câu hỏi, ứng phó với những dạng bài hóc búa và bẫy thường gặp. 
                                                    </div>
                                                </li>
                                                <li>
                                                    <img className="img-icon" src={iconList} alt="" />
                                                    <div className="card-level-list-item">
                                                        <strong>Reading:</strong> Nâng cao từ vựng, rèn luyện cách làm theo từng dạng bài.
                                                        Những kỹ năng và mẹo làm bài sẽ được hướng dẫn giúp bạn làm bài Reading nhanh hơn.
                                                    </div>
                                                </li>
                                                <li>
                                                    <img className="img-icon" src={iconList} alt="" />
                                                    <div className="card-level-list-item">
                                                        <strong>Writing:</strong> Đi sâu viết bài Task 1- Task 2. Hiểu sâu về cách phân tích dạng bài, viết các câu chuẩn, logic hơn.
                                                    </div>
                                                </li>
                                                <li>
                                                    <img className="img-icon" src={iconList} alt="" />
                                                    <div className="card-level-list-item">
                                                        <strong>Speaking:</strong> Phát âm chuẩn và phản xạ nhanh hơn. Có được vốn từ vựng mở rộng, ứng biến nhanh hơn
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>

                                </div>:''}
                                {level==='7'?<div className="col-sm-6">
                                    <div className="card-level card-level-sub">
                                        <div className="card-box card-box-sub card-box-certificate-b">
                                            <h1 className="card-level-title">Cấp độ 7.0+</h1>
                                            <p className="card-level-description">
                                            Học viên ở trình độ trung cấp (IELTS 6.0) cần luyện chuyên sâu kỹ năng Speaking và Writing.
                                            Học viên đã nắm vững cách viết triển khai các dạng bài IELTS Writing và cách triển khai ideas cho IELTS Speaking.
            
                                            </p>
                                            <h1 className="card-level-title--content">Nội dung</h1>
                                            <ul className="card-level-list pb-0 card-level-list-content">
                                                <li>
                                                    <img className="img-icon" src={iconList} alt="" />
                                                    <div className="card-level-list-item">
                                                        Trang bị kiến thức <strong>toàn diện</strong> và <strong>chuyên sâu</strong> về kỳ thi IELTS, kết hợp với việc phát triển năng lực ngôn ngữ, 
                                                        và chiến lược làm bài thi cho học viên ở cấp độ nâng cao. 
                                                    </div>
                                                </li>
                                                <li>
                                                    <img className="img-icon" src={iconList} alt="" />
                                                    <div className="card-level-list-item">
                                                        Tập trung vào các chủ đề <strong>nâng cao</strong> như: Nghệ thuật – Kiến trúc, Xã hội, Tài chính, và Cơ sở hạ tầng.
                                                    </div>
                                                </li>
                                            </ul>
                                            <h1 className="card-level-title--content">Kết quả đầu ra</h1>
                                            <ul className="card-level-list">
                                                <li>
                                                    <img className="img-icon" src={iconList} alt="" />
                                                    <div className="card-level-list-item">
                                                        <strong>Listening:</strong> Các bài tập nghe được thiết kế dưới dạng Homework,
                                                        không tốn thời gian trên lớp (tập trung vào luyện nói).
                                                    </div>
                                                </li>
                                                <li>
                                                    <img className="img-icon" src={iconList} alt="" />
                                                    <div className="card-level-list-item">
                                                        <strong>Reading:</strong> Thay đổi mindset, trước khi đọc nhìn vào cấu trúc câu thay vì đọc dịch từng từ từ trái sang phải.
                                                        Làm bài tập phân tích cấu trúc câu, 
                                                        note lại những cấu trúc xuất hiện trong bài, viết câu W áp dụng những cấu trúc và từ vựng đã học.
                                                    </div>
                                                </li>
                                                <li>
                                                    <img className="img-icon" src={iconList} alt="" />
                                                    <div className="card-level-list-item">
                                                        <strong>Writing:</strong> Thay đổi mindset không sử dụng từ đồng nghĩa khi chưa rõ nghĩa ngữ cảnh 
                                                        và collocation của nó, không viết câu quá dài, biết nghĩ tới cấu trúc cả câu trước khi viết.
                                                    </div>
                                                </li>
                                                <li>
                                                    <img className="img-icon" src={iconList} alt="" />
                                                    <div className="card-level-list-item">
                                                        <strong>Speaking:</strong> Luyện tập cách Think in English để diễn đạt các từ vựng khó, 
                                                        ideas khó và chủ đề khó từ vốn từ hạn chế và đơn giản của bản thân.
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>:''}
                            </div>
                        </div>
                    </section>
                </section>
            
        );
    }
}

export default LevelItem;