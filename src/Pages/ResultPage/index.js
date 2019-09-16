import React, { Component, Fragment } from 'react';
import Banner from '../../components/Banner';
import ResultLayout from './ResultLayout';
import Breadcrumb from '../../components/Breakcrumb';
import SuitableClass from './SuitableClass';
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
        }
    }
    // fetchResultTest = () => {
    //     return axios({
    //         method: 'get',
    //         url: 'https://vsn.edu.vn/api/user/report-multiple-choice-igen/5d7f41c90afbbaab1c6dcdc6',
    //       })
    //       .then((res) => {
    //         this.resultTest = res.data.data;
    //         console.log(this.resultTest.multipleChoice)
    //       })
    //       .catch((error) => {
    //           console.log(error);
    //       });
    // }
    componentDidMount(){
        window.scroll(0, 0);
        // this.fetchResultTest();
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