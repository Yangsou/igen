import React, { Component, Fragment } from 'react';
import Banner from './../../components/Banner';
import Breadcrumb from './../../components/Breakcrumb';
import Participation from './../../components/Participation/Participation';
import Register from './../../components/BannerRegister';
import RegisterProgram from './../../components/RegisterProgram';
import LevelItem from './LevelItem';
import img from '../../assets/img/img-banner.png';
class LandingPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: 'Tiếng Anh Tổng Quát',
            img,
            imgClassName: 'wrap-img',
            alt : 'Tiếng Anh Tổng Quát',
            breadcrumb : [
                {
                    label : 'Trang Chủ',
                    path : '/'
                },
                {
                    label : 'Chương Trình Học',
                    path : '/'
                },
                {
                    label : 'Tiếng Anh Tổng Quát',
                    active : true
                }
            ]
        }
    }
    render() {
        return (
            <Fragment>
                <Banner img={this.state.img} title={this.state.title} imgClassName={this.state.imgClassName} alt={this.state.alt}/>
                <Breadcrumb data={this.state.breadcrumb} />
                <RegisterProgram title={this.state.title}/>
                <LevelItem/>
                <Participation backgroundWhite={true} price1='1.300.00' price2='280.000'/>
                <Register />
            </Fragment>
        );
    }
}

export default LandingPage;