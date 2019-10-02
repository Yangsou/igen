import React, { Component } from 'react';
import axios from 'axios';
import './styles.scss';
class SuitableClass extends Component {
    constructor(props){
        super(props);
        this.state = {
            suitableClass: [],
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
            url: `http://localhost:8008/api/user/report-multiple-choice-igen/${this.props.id}`
            //url: `https://vsn.edu.vn/api/user/report-multiple-choice-igen/${this.props.id}`
          })
          .then((res) => {
            if(res && res.data.success){
              this.setState({
                suitableClass: res.data.courseInfo
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
                       suitableClass.map(course => {
                         return (
                           <div className="col-xs-12 col-sm-4">
                             <div className="item">
                               <h2 className="item__title item__title--vsn1">{course.title}</h2>
                               <div className="item__main">
                                 <div className="item__main__space item__main__space--vsn1"></div>
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
            </section>
        );
    }
}

export default SuitableClass;