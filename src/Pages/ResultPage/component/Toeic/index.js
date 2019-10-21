import React, { Component } from 'react';
import iconList from './../../../../assets/img/check-arround.png';
import './../../../PracticeToeic/LevelItem/styles.scss';
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
                <section className="item__level_toiec">
                    <section className="container-fluid bg-row">
                        <div className="container">
                            <div className="row wrap-flex-center">
                                {level==='500'?<div className="col-sm-6">
                                    <div className="card-level card-level-sub">
                                        <div className="card-box card-box-sub">
                                            <h1 className="card-level-title">Cấp độ 500+</h1>
                                            <p className="card-level-description mb-18">
                                            TOEIC 450, TOEIC 500, TOEIC 550 là số điểm TOEIC yêu cầu đầu ra của rất nhiều các trường Đại học tại Việt Nam. 
                                            </p>
                                            <h4 className="card-level-title-list">
                                                Đối tượng phù hợp:
                                            </h4>
                                            <ul className="card-level-list pb-0 card-level-list-content">
                                                <li>
                                                    <img className="img-icon" src={iconList} alt="" />
                                                    <div className="card-level-list-item">
                                                        Mất gốc tiếng Anh mặc dù đã học nhiều năm.
                                                    </div>
                                                </li>
                                                <li>
                                                    <img className="img-icon" src={iconList} alt="" />
                                                    <div className="card-level-list-item">
                                                        Kiến thức cơ bản vẫn kém, khả năng nghe còn yếu.
                                                    </div>
                                                </li>
                                                <li>
                                                    <img className="img-icon" src={iconList} alt="" />
                                                    <div className="card-level-list-item">
                                                        Không tìm thấy được một giảng viên có khả năng truyền đạt phù hợp với mình.
                                                    </div>
                                                </li>
                                                
                                            </ul>
                                            <h4 className="card-level-title-list">
                                                Sau khi kết thúc khoá học này, bạn sẽ:
                                            </h4>
                                            <ul className="card-level-list">
                                                <li>
                                                    <img className="img-icon" src={iconList} alt="" />
                                                    <div className="card-level-list-item">
                                                        Lấy lại được kiến thức căn bản, trọng tâm của Tiếng Anh nói chung và bài thi TOEIC nói riêng.
                                                    </div>
                                                </li>
                                                <li>
                                                    <img className="img-icon" src={iconList} alt="" />
                                                    <div className="card-level-list-item">
                                                        Nắm được dạng để thi chuẩn thông qua các bài tập, bài kiểm tra cuối kì theo format mới.
                                                    </div>
                                                </li>
                                                <li>
                                                    <img className="img-icon" src={iconList} alt="" />
                                                    <div className="card-level-list-item">
                                                     Nhận được những chia sẻ về mẹo làm bài, chủ điểm ngữ pháp thường gặp trong đề thi TOEIC format mới.

                                                    </div>
                                                </li>
                                                
                                            </ul>
                                        </div>

                                    </div>

                                </div>:''}
                                {level==='600'?<div className="col-sm-6">
                                    <div className="card-level card-level-sub">
                                        <div className="card-box card-box-sub">
                                            <h1 className="card-level-title">Cấp độ 600+</h1>
                                            <p className="card-level-description mb-18">
                                                Điểm số TOEIC 600 - 750+ là mong muốn của đa số các bạn thí sinh luyện thi chứng chỉ này.
                                            </p>
                                            <h4 className="card-level-title-list">
                                                Với số điểm trên bạn sẽ:
                                            </h4>
                                            <ul className="card-level-list pb-0 card-level-list-content">
                                                <li>
                                                    <img className="img-icon" src={iconList} alt="" />
                                                    <div className="card-level-list-item">
                                                        Đủ điều kiện xét tốt nghiệp tại nhiều trường Đại học TOP ở Việt Nam.
                                                    </div>
                                                </li>
                                                <li>
                                                    <img className="img-icon" src={iconList} alt="" />
                                                    <div className="card-level-list-item">
                                                    Tự tin xin việc tại nhiều công ty trong nước.
                                                    </div>
                                                </li>
                                                <li>
                                                    <img className="img-icon" src={iconList} alt="" />
                                                    <div className="card-level-list-item">
                                                        Có chứng chỉ để được thăng chức, đi công tác, tu nghiệp tại nước ngoài.
                                                    </div>
                                                </li>
                                            </ul>
                                            <h4 className="card-level-title-list">
                                                Để tham gia khoá học này, bạn cần thoả mãn 1 trong 3 điều kiện sau:
                                            </h4>
                                            <ul className="card-level-list pb-0 card-level-list-content">
                                                <li>
                                                    <img className="img-icon" src={iconList} alt="" />
                                                    <div className="card-level-list-item">
                                                        Hoàn thành khoá học "Cấp độ 500+"
                                                    </div>
                                                </li>
                                                <li>
                                                    <img className="img-icon" src={iconList} alt="" />
                                                    <div className="card-level-list-item">
                                                        Có điểm thi TOEIC đạt 500+ không quá 4 tháng.
                                                    </div>
                                                </li>
                                                <li>
                                                    <img className="img-icon" src={iconList} alt="" />
                                                    <div className="card-level-list-item">
                                                        Hoàn thành bài thi đầu vào của i-Gen với số điểm tương đương.
                                                    </div>
                                                </li>
                                            </ul>
                                            <h4 className="card-level-title-list">
                                                Sau khi kết thúc khoá học này, bạn sẽ:
                                            </h4>
                                            <ul className="card-level-list">
                                                <li>
                                                    <img className="img-icon" src={iconList} alt="" />
                                                    <div className="card-level-list-item">
                                                        Củng cố và nắm được những cấu trúc ngữ pháp đặc biệt thường xuyên xuất hiên trong đề thi thật TOEIC.
                                                    </div>
                                                </li>
                                                <li>
                                                    <img className="img-icon" src={iconList} alt="" />
                                                    <div className="card-level-list-item">
                                                        Vận dụng ngôn ngữ TOEIC trong môi trường giao tiếp công việc hàng ngày.
                                                    </div>
                                                </li>
                                                <li>
                                                    <img className="img-icon" src={iconList} alt="" />
                                                    <div className="card-level-list-item">
                                                        Nâng cao kĩ năng ứng biến với “bẫy” của đề thi TOEIC format mới
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>

                                </div>:''}
                                {level==='700'?<div className="col-sm-6">
                                    <div className="card-level card-level-sub">
                                        <div className="card-box card-box-sub card-box-certificate-b">
                                            <h1 className="card-level-title">Cấp độ 700+</h1>
                                            <p className="card-level-description mb-18">
                                                Điểm số TOEIC 700+ là một số điểm có thể được gọi là cao đối với trình độ trung bình của các bạn sinh viên hiện nay,
                                                và cũng sẽ giúp các bạn mở ra nhiều con đường thăng tiến trong công việc hơn.
            
                                            </p>
                                            <h4 className="card-level-title-list">
                                                Với số điểm này, bạn có thể:
                                            </h4>
                                            <ul className="card-level-list pb-0 card-level-list-content">
                                                <li>
                                                    <img className="img-icon" src={iconList} alt="" />
                                                    <div className="card-level-list-item">
                                                         Ứng tuyển vào các doanh nghiệp, tập đoàn lớn
                                                    </div>
                                                </li>
                                                <li>
                                                    <img className="img-icon" src={iconList} alt="" />
                                                    <div className="card-level-list-item">
                                                        Đi du học tại các quốc gia có chấp nhận
                                                    </div>
                                                </li>
                                                <li>
                                                    <img className="img-icon" src={iconList} alt="" />
                                                    <div className="card-level-list-item">
                                                        Có được khối lượng từ vựng giao tiếp trong công việc đa dạng.
                                                    </div>
                                                </li>
                                            </ul>
                                            <h4 className="card-level-title-list">
                                                Để tham gia khoá học này, bạn cần thoả mãn 1 trong 3 điều kiện sau:
                                            </h4>
                                            <ul className="card-level-list pb-0 card-level-list-content">
                                                <li>
                                                    <img className="img-icon" src={iconList} alt="" />
                                                    <div className="card-level-list-item">
                                                        Hoành thành khoá học "Cấp độ 600+"
                                                    </div>
                                                </li>
                                                <li>
                                                    <img className="img-icon" src={iconList} alt="" />
                                                    <div className="card-level-list-item">
                                                    Có điểm thi TOEIC đạt 600+ không quá 4 tháng.
                                                    </div>
                                                </li>
                                                <li>
                                                    <img className="img-icon" src={iconList} alt="" />
                                                    <div className="card-level-list-item">
                                                        Hoàn thành bài thi đầu vào của i-GEN với số điểm tương đương.
                                                    </div>
                                                </li>
                                            </ul>
                                            <h4 className="card-level-title-list">
                                                Sau khi kết thúc khoá học này, bạn sẽ:
                                            </h4>
                                            <ul className="card-level-list">
                                                <li>
                                                    <img className="img-icon" src={iconList} alt="" />
                                                    <div className="card-level-list-item">
                                                        Nắm được cấu trúc các phần thi nghe, đặc điểm riêng biệt của từng phần,
                                                        cách tư duy ra đề của từng phần, các mẹo làm bài áp dụng cho từng phần.   
                                                    </div>
                                                </li>
                                                <li>
                                                    <img className="img-icon" src={iconList} alt="" />
                                                    <div className="card-level-list-item">
                                                        Củng cố kiến thức về Ngữ pháp và Từ vựng, 
                                                        đặc biệt những chủ điểm là thói quen ra đề của đề thi TOEIC, các bẫy riêng của từng chủ điểm.
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