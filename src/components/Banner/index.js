import React, { Component } from 'react';
// import generalImage from '../../../assets/img/register_exam_bg.png';
import './styles.scss'

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
        titleAccompany: ''
    }
  }
  componentDidMount() {
      if ( window.location.pathname === '/dong-hanh-cung-du-an') {
          this.setState({
              titleAccompany: 'title-accompany-project'
          })
      }
  }
  render() {
    const { img, title, imgClassName, alt } = this.props;
      return (
          <section className="wrap-banner-box">
              <div className="home lazy-load">
                  <div className="home__content container">
                      <div className="row">
                          <div className="col-sm-7 " style={{zIndex: 123}}>
                              <h1 className={`wrap-banner-title banner__title ${this.state.titleAccompany}`}>{ title }</h1>
                          </div>
                          <div className="col-sm-5 wrap-banner-img">
                              <div className={imgClassName}>
                                  <img className="banner-img" src={img} alt={alt} />
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