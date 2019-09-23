import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import './styles.scss';
class ComingSoon extends React.Component {
  render() {
    return (
      <section className="home lazy-load coming-soon" id="home">
      <div className="home__bg home__bg--top"></div>
      <div className="home__bg home__bg--center"></div>
      <div className="home__bg home__bg--bottom"></div>
      <div className="home__bg home__bg--people"></div>

      <div className="home__content container coming-soon-content">
        <p className="home__content__brand">i-Gen</p>
        <ReactTypingEffect className="home__content__text home__content__text--mobile"
          text="Chúng tôi đang hoàn thiện bài kiểm tra đầu vào và khóa học bạn đã chọn.
                Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất."
          speed={70}
          eraseDelay={900000}
        />
      </div>
    </section>
    )
  }
}

export default ComingSoon;