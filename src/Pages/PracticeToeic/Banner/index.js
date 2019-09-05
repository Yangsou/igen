import React, { Component } from 'react';
import generalImage from '../../../assets/img/program-toiec.svg';
import './styles.scss'
class Banner extends Component {
    render() {
        return (
            <section className="wrap-banner-box-toiec">
                <div className="home lazy-load">
                    <div className="home__content container">
                        <div className="row">
                            <div className="col-sm-7 ">
                                <h1 className="wrap-banner-title banner__title">Luyện Thi TOEIC</h1>
                            </div>
                            <div className="col-sm-5 wrap-banner-img-toiec">
                                <div className="wrap-img-toiec">
                                    <img className="banner-img" src={generalImage} alt="Tiếng Anh tổng quát" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="home__bg home__bg--center"></div>
                    <div className="home__bg home__bg--bottom"></div>
                </div>
            </section>
        );
    }
}

export default Banner;