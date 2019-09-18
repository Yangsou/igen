import React, { Component } from 'react';
import largeStick from '../../../assets/img/large-stick.png';
import axios from 'axios';
import './styles.scss';
class ResultLayout extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: {
                _id: "",
                multipleChoice: {
                lesson: "",
                points: 0,
                time: 0,
                slug: "",
                description: "",
                title: "",
                user: "",
                _id: ""
                },
                corrected: 0,
                contact: {
                user: "",
                dateEnd: 0,
                dateStart: 0,
                optinals: [ ],
                phone: "",
                email: "",
                name: ""
                },
                dateAdded: "",
                __v: 0,
                totalQuestions: 0,
                description: "",
                name: "",
                totalJoined: 0,
                link: ''
                }
        }
    }
    fetchResultTest = () => {
        return axios({
            method: 'get',
            url: `https://vsn.edu.vn/api/user/report-multiple-choice-igen/${this.props.id}`
          })
          .then((res) => {
            this.setState({
                data: res.data.data
            })
          })
          .catch((error) => {
              console.log(error);
          });
    }
    timeTest = (start, end) => {
        var time = 0
        if (start && end) {
            time = end - start;
        }
        const minutes = Math.floor(time / 60000);
        const seconds = ((time % 60000) / 1000).toFixed(0);
        return minutes+' phút '+seconds+' giây'

    }
    componentDidMount(){
        this.fetchResultTest();
        window.scroll(0, 0);
    }
    render() {
        const {data} = this.state;
        return (
            <section className="result__wrap container-fluid">
                <div className=" result container">
                    <div className="result__wrap-title">
                        <div className="wrap-image">
                            <img className="result__stick" src={largeStick} alt=""/>
                        </div>
                        <h1 className="result__title">Chúc mừng bạn đã hoàn thành bài thi thử</h1>
                        <h3 className="result__sub-title">Kết quả bài kiểm tra đầu vào "{data.multipleChoice.title}"</h3>
                        <hr />
                    </div>
                    <div className="result__description row">
                        <div className="item col-xs-12 col-sm-4">
                            <h4>TÊN NGƯỜI LÀM BÀI</h4>
                            <p>{data.name}</p>
                        </div>
                        <div className="item col-xs-12 col-sm-4">
                            <h4>THỜI GIAN KIỂM TRA</h4>
                            <p>{data.multipleChoice.time} phút</p>
                        </div>
                        <div className="item item-last col-xs-12 col-sm-4">
                            <h4>TỔNG THỜI GIAN LÀM BÀI</h4>
                            <p>{this.timeTest(data.contact.dateStart,data.contact.dateEnd)}</p>
                        </div>
                    </div>
                    <div className="result__score ">
                        <div className="score__wrap row">
                            <div className="item score col-xs-12 col-sm-8">
                                <p className="score__label__listen">Bạn làm được <span className="score__listen">{data.corrected}/{data.totalQuestions}</span> câu trả lời đúng</p>
                                {/* <p className="score__label__read">Điểm đọc: <span className="score__read">60 điểm (40/60 câu trả lời đúng)</span></p> */}
                            </div>
                            <div className="item score__total col-xs-12 col-sm-4">
                                <h4>TỔNG ĐIỂM</h4>
                                <p>{data.corrected}</p>
                            </div>
                        </div>
                    </div>
                    <div className="result__footer">
                        <p>
                            Bạn muốn làm lại để cải thiện kết quả? <a className="result__footer__link" href={data.link}>Click vào đây.</a>
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}

export default ResultLayout;