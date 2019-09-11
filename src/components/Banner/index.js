import React, { Component } from 'react';
// import generalImage from '../../../assets/img/register_exam_bg.png';
import './styles.scss'

class Banner extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const { img, title, imgClassName } = this.props;
      return (
          <section className="wrap-banner-register-exam">
              <div className="home lazy-load">
                  <div className="home__content container">
                      <div className="row">
                          <div className="col-sm-6 ">
                              <h1 className="wrap-banner-title banner__title">{ title }</h1>
                          </div>
                          <div className="col-sm-6 wrap-banner-img-register-exam">
                              <div className="wrap-img-register-exam">
                                  <img className={`banner-img ${imgClassName}`} src={img} alt="Tiếng Anh tổng quát" />
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