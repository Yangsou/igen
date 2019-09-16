import React, { Component } from 'react';
import largeStick from '../../../assets/img/large-stick.png';
import './styles.scss';
class ResultLayout extends Component {
    render() {
        return (
            <section className="result__wrap container-fluid">
                <div className=" result container">
                    <div className="result__wrap-title">
                        <div className="wrap-image">
                            <img className="result__stick" src={largeStick} alt=""/>
                        </div>
                        <h1 className="result__title">Chúc mừng bạn đã hoàn thành bài thi thử</h1>
                        <h3 className="result__sub-title">Kết quả bài kiểm tra đầu vào “Thi Thử TOEIC”</h3>
                        <hr />
                    </div>
                    <div className="result__description row">
                        <div className="item col-xs-12 col-sm-4">
                            <h4>TÊN NGƯỜI LÀM BÀI</h4>
                            <p>Minh Việt Vương</p>
                        </div>
                        <div className="item col-xs-12 col-sm-4">
                            <h4>THỜI GIAN KIỂM TRA</h4>
                            <p>60 phút</p>
                        </div>
                        <div className="item item-last col-xs-12 col-sm-4">
                            <h4>TỔNG THỜI GIAN LÀM BÀI</h4>
                            <p>52 phút 45 giây</p>
                        </div>
                    </div>
                    <div className="result__score ">
                        <div className="score__wrap row">
                            <div className="item score col-xs-12 col-sm-8">
                                <p className="score__label__listen">Điểm nghe: <span className="score__listen">60 điểm (40/60 câu trả lời đúng)</span></p>
                                <p className="score__label__read">Điểm đọc: <span className="score__read">60 điểm (40/60 câu trả lời đúng)</span></p>
                            </div>
                            <div className="item score__total col-xs-12 col-sm-4">
                                <h4>TỔNG ĐIỂM</h4>
                                <p>120</p>
                            </div>
                        </div>
                    </div>
                    <div className="result__footer">
                        <p>
                            Bạn muốn làm lại để cải thiện kết quả? <a className="result__footer__link" href="gg.com">Click vào đây.</a>
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}

export default ResultLayout;