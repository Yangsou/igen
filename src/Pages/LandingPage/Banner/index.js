import React, { Component } from 'react';
import generalImage from '../../../assets/img/program-img-general.png';
import './styles.scss'
class Banner extends Component {
    render() {
        return (
            <section className="home lazy-load" id="home">
                <div className="home__content container">
                    <div className="wrap-banner row">
                        <div className="col-sm-7 ">
                            <h1 className="wrap-banner-title banner__title">Tiếng Anh Tổng Quát</h1>
                        </div>
                        <div className="wrap-banner-img col-sm-5 ">
                            <div className="wrap-img">
                                <img  src={generalImage} alt="Tiếng Anh tổng quát" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home__bg home__bg--center"></div>
                <div className="home__bg home__bg--bottom"></div>
            </section>
        );
    }
}

export default Banner;