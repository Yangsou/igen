import React, { Component, Fragment } from 'react';
import Banner from './../../components/Banner';
import Breadcrumb from './../../components/Breakcrumb';
import InfoTest from './InfoTest'
import PrepareTest from './PrepareTest'
import ProgramStydy from './ProgramStudy'
import img from '../../assets/img/register_exam_bg.png';
class RegisterTest extends Component {
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
                 <Breadcrumb data={this.state.breadcrumb} />
                <PrepareTest/>
                <InfoTest />
                <ProgramStydy />
            </Fragment>
        );
    }
}

export default RegisterTest;