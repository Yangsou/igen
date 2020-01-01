import React, { Component, Fragment } from 'react';
import Banner from './../../components/Banner';
import Breadcrumb from './../../components/Breakcrumb';
import DescriptionAccompany from './DescriptionAccompany';
import ItemPartner from './ItemPartner';
import img from '../../assets/img/dong-hanh-cung-du-an_03.png';
export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'HƯỞNG ỨNG CÙNG DỰ ÁN',
            img,
            imgClassName: 'wrap-img-accompany-project',
            alt : 'HƯỞNG ỨNG CÙNG DỰ ÁN',
            breadcrumb : [
                {
                    label : 'Trang Chủ',
                    path : '/'
                },
                {
                    label : 'Hưởng ứng cùng dự án',
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
                <DescriptionAccompany />
                <ItemPartner />
                </div>
            </Fragment>
        )
    }
}
