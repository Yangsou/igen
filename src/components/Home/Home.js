import React from 'react';
import './home.scss';

class Home extends React.Component {
  render() {
    return (
      <section className="home">
        <div className="home__bg home__bg--top"></div>
        <div className="home__bg home__bg--center"></div>
        <div className="home__bg home__bg--bottom"></div>
        <div className="home__bg home__bg--people"></div>

        <div className="home__content container">
          <p className="home__content__brand">I-Gen</p>
          <p className="home__content__text">i-Gen  Một triệu sinh viên Việt Nam tự tin với Tiếng Anh </p>
        </div>
      </section>
    )
  }
}

export default Home;