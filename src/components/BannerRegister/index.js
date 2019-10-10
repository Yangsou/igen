import React from 'react';
import {  Link } from "react-router-dom";
import registerImg from '../../assets/img/register_exam_bg.png';

import './styles.scss';
export default class Sponser extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      noPadding : '',
    }
  }
  componentDidMount(){
    const currentLocation = window.location.href;
    const str = 'tieng-anh-tong-quat';
    if(currentLocation.search(str)>0) {
      this.setState({ 
        noPadding : 'b-t-0'
       });
    } else {
      this.setState({ 
        noPadding : ''
       });
    }
  }
  render() {

    return (
      <section className={`sponser-ielts lazy-load ${this.state.noPadding}`}>
        <div className="container">
          <div className="register-exam-1">
            <div className="col-md-7">
              <p className="register-exam__title">Đánh Giá Năng Lực</p>
              <p className="register-exam__desc">Kiểm tra ngay trình độ của bạn để tìm thấy lớp học và thời gian phù hợp</p>
              <div className="relative">
                <div className="register-exam__list">
                  <p className="register-exam__list__item"><span className="icon icon__check-arround"></span>Hoàn toàn miễn phí</p>
                  <p className="register-exam__list__item"><span className="icon icon__check-arround"></span>Biết ngay kết quả</p>
                  <p className="register-exam__list__item"><span className="icon icon__check-arround"></span>100% online tại nhà</p>
                </div>
                <Link to="/danh-gia-nang-luc" className="btn register-exam__btn">LÀM NGAY</Link>
              </div>
            </div>
            <div className="col-md-5">
              <img src={registerImg} alt="Đánh Giá Năng Lực" />
            </div>
          </div>
         </div>
      </section>
    )
  }

}