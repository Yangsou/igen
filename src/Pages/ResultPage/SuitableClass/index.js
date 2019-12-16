import React, { Component } from 'react';
import imgA1 from '../../../assets/img/GE-A1.png'
import imgA2 from '../../../assets/img/GE-A2.png'
import imgB1 from '../../../assets/img/GE-B1.png'
import imgB2 from '../../../assets/img/GE-B2.png'
import imgC1 from '../../../assets/img/GE-C1.png'
import imgC2 from '../../../assets/img/GE-C2.png'
import imgIelts1 from '../../../assets/img/IE1.png'
import imgIelts2 from '../../../assets/img/IE2.png'
import imgIelts3 from '../../../assets/img/IE3.png'
import imgToiec from '../../../assets/img/TE.png'
import Modal from './../../../components/Modal';
import axios from 'axios';
import './styles.scss';
class SuitableClass extends Component {
    constructor(props){
        super(props);
        this.state = {
            suitableClass: [],
            show : false,
            img: imgIelts1,
            courseType: ''
        }
    }
    convertTime = (time) => {
        var date = new Date(time);
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hour = date.getHours();
        var min = date.getMinutes();
        return hour + ':' + min + ' ' + day+'.'+month+'.'+year
    }
    fetchResultTest = () => {
        return axios({
            method: 'get',
            //url: `http://localhost:8008/api/user/report-multiple-choice-igen/${this.props.id}`
            url: `https://vsn.edu.vn/api/user/report-multiple-choice-igen/${this.props.id}`
          })
          .then((res) => {
            if(res && res.data.success){
              this.setState({
                suitableClass: res.data.courseInfo,
                courseType :  res.data.data.courseType
              })
            }
          })
          .catch((error) => {
              console.log(error);
          });
    }
    setStateSuitableCourse = (course) => {
        this.setState({
            suitableClass: {
                name: course.name,
                link: course.link,
                img: course.img
            } 
        })
    }
  
  hideModal = () => {
  this.setState({ show: false });
  }
  showModal = () => {
      const level = this.state.courseType;
      let image = '';
      switch (level) {
          case 'A1':
              image = imgA1;
              break;
          case 'A2':
              image = imgA2
              break;
          case 'B1':
              image = imgB1
              break;
          case 'B2':
              image = imgB2
              break;
          case 'C1':
              image = imgC1
              break;
          case 'C2':
              image = imgC2
              break;
          case '500':
              image = imgToiec
              break;
          case '600':
              image = imgToiec
              break;
          case '700':
              image = imgToiec
              break;
          case '5':
              image = imgIelts1
              break;
          case '6':
              image = imgIelts2
              break;
          case '7':
              image = imgIelts3
              break;
          default:
              break;
      }
      this.setState({
          img: image,
          show : true
      })
  }
    componentDidMount(){
        this.fetchResultTest()
    }
    render() {
      let {suitableClass} = this.state
        return (
            <section className="suitable-class-wrap container-fluid">
                <div className="suitable-class container">
                    <h1 className="suitable-class__title">Lớp học phù hợp với bạn</h1>
                   <div className="suitable-class__list row">
                     {suitableClass.length ? (
                       suitableClass.map((course, index) => {
                         return (
                           <div key={index} className="col-xs-12 col-sm-4">
                             <div className="item">
                               <h2 className="item__title item__title--vsn1">{course.title}</h2>
                               <div className="item__main">
                                 <div className="item__main__content">
                                   <img src={course.thumbnail} alt=""/>
                                   <div className="item__description">
                                     <div className="item__description__content">
                                       <div className="item__description__left">
                                         Thời gian bắt đầu:
                                       </div>
                                       <div className="item__description__right">
                                         {this.convertTime(course.start_date)} (dự kiến)
                                       </div>
                                     </div>
                                     <div className="item__description__content item__description__content--last">
                                       <div className="item__description__left">
                                         Số buổi
                                       </div>
                                       <div className="item__description__right">
                                         {course.lessons} buổi
                                       </div>
                                     </div>
                                   </div>
                                 </div>
                                 <div className="wrap-popup">
                                   <span onClick={() => this.showModal()} className="level-description" >Xem chi tiết lộ trình tại đây</span>
                                 </div>
                                 <div className="btn-wrap">
                                   <a href={course.link} className="btn btn--outline p-l-30 p-r-20 f-14" rel="noopener noreferrer"><span className="btn-text">Đăng ký học</span> <span className="icon icon__arrow"></span></a>
                                 </div>
                               </div>
                             </div>
                           </div>
                         )
                       })
                     ) : (
                       <h3 className="suitable-class__empty">Hiện tại không có lớp phù hợp với trình độ của bạn. <br />
                         Chúng tôi sẽ liên hệ với bạn khi có lớp phù hợp.</h3>
                     )}
                   </div>
                </div>
                <Modal show={this.state.show} img={this.state.img} hideModal={this.hideModal} />
            </section>
        );
    }
}

export default SuitableClass;