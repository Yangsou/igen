import React, { Component } from 'react';
import axios from 'axios';
import './styles.scss';
class SuitableClass extends Component {
    constructor(props){
        super(props);
        this.state = {
            suitableClass: {
                title: '',
                link: '',
                img: '',
                start_date: '',
                thumbnail: '',
                lessons: ''

            },
        }
    }
    convertTime = (time) => {
        var date = new Date(time);
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        return day+'.'+month+'.'+year
    }
    fetchResultTest = () => {
        return axios({
            method: 'get',
            url: `https://vsn.edu.vn/api/user/report-multiple-choice-igen/${this.props.id}`
          })
          .then((res) => {
            this.setState({
                suitableClass: {
                    title: res.data.courseInfo.title,
                    link: res.data.courseInfo.link,
                    thumbnail: 'https://vsn.edu.vn/'+res.data.courseInfo.thumbnail,
                    start_date: res.data.courseInfo.start_date,
                    lessons:  res.data.courseInfo.lessons
                }
            })
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
                               <h2 className="item__title item__title--vsn1">Lớp {this.state.suitableClass.title}</h2>
                               <div className="item__main">
                                   <div className="item__main__space item__main__space--vsn1"></div>
                                   <div className="item__main__content">
                                       <img src={this.state.suitableClass.thumbnail} alt=""/>
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
                                                   {this.convertTime(this.state.suitableClass.start_date)} (dự kiến)
                                               </div>
                                           </div>
                                           <div className="item__description__content item__description__content--last">
                                               <div className="item__description__left">
                                                   Số buổi
                                               </div>
                                               <div className="item__description__right">
                                                   {this.state.suitableClass.lessons} buổi
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