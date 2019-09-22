import React, { Component } from 'react';
import imgA1 from '../../../assets/img/icon-A1.png';
import imgB1 from '../../../assets/img/icon-B1.png';
import imgC1 from '../../../assets/img/icon-C1.png';
import img500 from '../../../assets/img/icon-toeic-500.png';
import img650 from '../../../assets/img/icon-toeic-650.png';
import img800 from '../../../assets/img/icon-toeic-800.png';
import img50 from '../../../assets/img/icon-ielts50.png';
import img60 from '../../../assets/img/icon-ielts60.png';
import img70 from '../../../assets/img/icon-ielts70.png';
import axios from 'axios';
import './styles.scss';
class SuitableClass extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: {
                corrected: 0,
                totalQuestions: 0,
            },
            suitableClass: {
                name: '',
                link: '',
                img: ''
            },
            listCourses: [
                {
                    name: 'A1',
                    link: 'https://vsn.edu.vn/course/tieng-anh-tong-quat-a1',
                    img: imgA1
                },
                {
                    name: 'B1',
                    link: 'https://vsn.edu.vn/course/tieng-anh-tong-quat-trinh-do-b1',
                    img: imgB1
                },
                {
                    name: 'C1',
                    link: 'https://vsn.edu.vn/course/tieng-anh-tong-quat-trinh-do-c1',
                    img: imgC1
                },
                {
                    name: 'TOEIC 500+',
                    link: 'https://vsn.edu.vn/course/toeic-01-introductory-course',
                    img: img500
                },
                {
                    name: 'TOEIC 650+',
                    link: 'https://vsn.edu.vn/course/toeic-intermediate',
                    img: img650
                },
                {
                    name: 'TOEIC 800+',
                    link: 'https://vsn.edu.vn/course/toeic-advanced',
                    img: img800
                },
                {
                    name: 'IELTS 5.0',
                    link: '',
                    img: img50
                },
                {
                    name: 'IELST 6.0',
                    link: '',
                    img: img60
                },
                {
                    name: 'IELTS 7.0',
                    link: '',
                    img: img70
                },
            ],
        }
    }
    fetchResultTest = () => {
        return axios({
            method: 'get',
            url: `https://vsn.edu.vn/api/user/report-multiple-choice-igen/${this.props.id}`
          })
          .then((res) => {
            this.setState({
                data: {
                    corrected: res.data.data.corrected,
                    totalQuestions: res.data.data.totalQuestions
                }
            })
            this.detectCourse(this.state.data)
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
    detectCourse = (data) => {
            const { corrected, totalQuestions } = data;
            let  course = {}
            switch (totalQuestions) {
                case 50:
                    if ( corrected >0 && corrected <=30) {
                        course =this.state.listCourses[0]
                    } else if (corrected >30 && corrected <=40) {
                        course =this.state.listCourses[1]
                    } else if (corrected >40 && corrected <=50) {
                        course =this.state.listCourses[2]
                    }
                    break;
                case 100:
                    if ( corrected >0 && corrected <=45) {
                        course =this.state.listCourses[3]
                    } else if (corrected >45 && corrected <=70) {
                        course =this.state.listCourses[4]
                    } else if (corrected >70 && corrected <=100) {
                        course =this.state.listCourses[5]
                    }
                    break;
                case 36:
                    if ( corrected >0 && corrected <=15) {
                        course =this.state.listCourses[6]
                    } else if (corrected >15 && corrected <=25) {
                        course =this.state.listCourses[7]
                    } else if (corrected >25 && corrected <=36) {
                        course =this.state.listCourses[8]
                    }
                    break;
                default: return
            }
            this.setStateSuitableCourse(course) 
    }
    componentDidMount(){
        this.fetchResultTest()
    }
    render() {
        return (
            <section className="suitable-class-wrap container-fluid">
                <div className="suitable-class container">
                    <h1 className="suitable-class__title">Lớp học phù hợp với bạn</h1>
                   <div className="suitable-class__list row">
                       <div className="col-xs-12 col-sm-4">
                           <div className="item">
                               <h2 className="item__title item__title--vsn1">Lớp {this.state.suitableClass.name}</h2>
                               <div className="item__main">
                                   <div className="item__main__space item__main__space--vsn1"></div>
                                   <div className="item__main__content">
                                       <img src={this.state.suitableClass.img} alt=""/>
                                       <div className="item__description">
                                           <div className="item__description__content">
                                               <div className="item__description__left">
                                                   Thời gian:
                                               </div>
                                               <div className="item__description__right">
                                                   Sáng 2,4,6 từ 9h00 - 10h30
                                               </div>
                                           </div>
                                           <div className="item__description__content">
                                               <div className="item__description__left">
                                                   Thời gian bắt đầu: 
                                               </div>
                                               <div className="item__description__right">
                                                   1.9.2019 (dự kiến)
                                               </div>
                                           </div>
                                           <div className="item__description__content item__description__content--last">
                                               <div className="item__description__left">
                                                   Số buổi
                                               </div>
                                               <div className="item__description__right">
                                                   24 buổi
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                                   <div className="btn-wrap">
                                   <a href={this.state.suitableClass.link} className="btn btn--outline p-l-30 p-r-20 f-14" rel="noopener noreferrer"><span className="btn-text">Đăng ký học</span> <span className="icon icon__arrow"></span></a>
                                   </div>
                               </div>
                           </div>
                       </div>
                       
                   </div>
                </div>
            </section>
        );
    }
}

export default SuitableClass;