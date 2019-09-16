import React, { Component, Fragment } from 'react';
import Banner from '../../components/Banner';
import ResultLayout from './ResultLayout';
import Breadcrumb from '../../components/Breakcrumb';
import SuitableClass from './SuitableClass';
import axios from 'axios';
import img from '../../assets/img/register_exam_bg.png';
class ResultPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: 'Đăng Ký Thi Thử',
            img,
            imgClassName: 'wrap-img-register-exam',
            alt: 'Đăng Ký Thi Thử',
            breadcrumb : [
                {
                    label : 'Trang Chủ',
                    path : '/'
                },
                {
                    label : 'Đăng Ký Thi Thử',
                    path : '/dang-ky-thi-thu'
                },
                {
                    label : 'Thi Thử TOEIC',
                    active : true
                }
            ],
            resultTest: '',
        }
    }
    fetchResultTest = () => {
      let id = window.location.href.split('/').pop();
        return axios({
            method: 'get',
            url: `https://vsn.edu.vn/api/user/report-multiple-choice-igen/${id}`,
          })
          .then((res) => {
            console.log(res.data)
          })
          .catch((error) => {
              console.log(error);
          });
    }
    componentDidMount(){
        window.scroll(0, 0);
        this.fetchResultTest();
    }
    render() {
        return (
            <Fragment>
                <Banner img={this.state.img} title={this.state.title} imgClassName={this.state.imgClassName} alt={this.state.alt}/>
                <div className="background-grey">
                    <Breadcrumb data={this.state.breadcrumb} setBackground={true} />
                    <ResultLayout />
                    <SuitableClass />
                </div>
            </Fragment>
        );
    }
}

export default ResultPage;