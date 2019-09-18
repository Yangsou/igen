import React from 'react';
import './home.scss';
import {  Link } from "react-router-dom";
class Home extends React.Component {
  clickPrimaryButton = () => {
    window.open('https://igen.vsn.edu.vn/dang-ky-thi-thu', '_blank')
  }

  render() {
    return (
      <section className="home lazy-load" id="home">
        <div className="home__bg home__bg--top"></div>
        <div className="home__bg home__bg--center"></div>
        <div className="home__bg home__bg--bottom"></div>
        <div className="home__bg home__bg--people"></div>

        <div className="home__content container">
          <p className="home__content__brand">i-Gen</p>
          <p className="home__content__text">Một triệu sinh viên Việt Nam tự tin với Tiếng Anh</p>
          <Link to="/dang-ky-thi-thu">
            <button className="btn btn--gradient btn--radius">
              Học tập ngay
            </button>
          </Link>
        </div>
      </section>
    )
  }
}

export default Home;