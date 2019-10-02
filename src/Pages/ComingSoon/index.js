import React from 'react';
import './styles.scss';
class ComingSoon extends React.Component {

  render() {
    return (
      <section className="home lazy-load coming-soon" id="home">
      <div className="home__bg home__bg--top"></div>
      <div className="home__bg home__bg--center"></div>
      <div className="home__bg home__bg--bottom"></div>
      <div className="home__bg home__bg--people"></div>

      <div className="home__content container coming-soon-content p-t-20">
        <p className="home__content__brand">i-Gen</p>
        <p className="home__content__text home__content__text--mobile">
                Chúng tôi đang hoàn thiện bài kiểm tra đầu vào và khóa học bạn đã chọn. Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.
        </p>
        <a href="https://igen.edu.vn/">
          <button className="btn btn--gradient btn--radius m-t-0" onClick={()=> window.scroll(0, 0)}>
                Back to home page
          </button>
        </a>
      </div>
    </section>
    )
  }  
}

export default ComingSoon;