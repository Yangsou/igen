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
            title: 'Đánh Giá Năng Lực',
            img,
            imgClassName: 'wrap-img-register-exam',
            alt: 'Đánh Giá Năng Lực',
            breadcrumb : [
                {
                    label : 'Trang Chủ',
                    path : '/'
                },
                {
                    label : 'Đánh Giá Năng Lực',
                    path : '/danh-gia-nang-luc'
                },
                {
                    label : 'Thi Thử TOEIC',
                    active : true
                }
            ]
        }
    }
    componentDidMount(){
      window.scroll(0, 0);
    }
    render() {
        return (
            <Fragment>
                <Banner img={this.state.img} title={this.state.title} imgClassName={this.state.imgClassName} alt={this.state.alt}/>
                <div className="background-grey">
                    <Breadcrumb data={this.state.breadcrumb} setBackground={true} />
                    <ResultLayout id={window.location.href.split('/').pop()} />
                    <SuitableClass id={window.location.href.split('/').pop()} />
                </div>
            </Fragment>
        );
    }
}

export default ResultPage;