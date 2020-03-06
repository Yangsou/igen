import React, { Component } from 'react';
import bgBook from '../../assets/img/book.png';
import bgAvatar from '../../assets/img/avatar-bg.png';
import bgClass from '../../assets/img/bg-class.png';
import bgHomework from '../../assets/img/home-work.png';
import bgexam from '../../assets/img/exam.png';
import walletImage from '../../assets/img/wallet.png';
import './Participation.scss';

class Participation extends Component{
  render() {
  const { backgroundWhite, price1 } = this.props;
  var setBackground = (backgroundWhite) => {
    return backgroundWhite?'background-white':'';
  }
  const pathName = window.location.pathname;
  return (
    <section className={`participation lazy-load ${setBackground(backgroundWhite)} ${price1?'p-b-0':''} `} id="rules">
      <div className="container">
        <p className="participation__title">Thể lệ tham gia</p>
        <div className="participation__row">
          <div className="item col-sm-6 item--fix-space">
            <div className="item__wrapper__img">
              <img src={walletImage} className="item__img item__img--fix-size" alt="Ký quỹ" />
            </div>
            <p className="item__title item__title--mb-8">Đóng học phí</p>
            {
              (pathName === '/' || pathName === '/tieng-anh-tong-quat')
              && <p className="item__text item__text--none-margin">
              Chương trình Tiếng Anh Tổng quát: 1.950.000 VND
            </p>
            }
            {
              (pathName === '/' || pathName === '/luyen-thi-TOEIC')
              && <p className="item__text item__text--none-margin">
              Chương trình Luyện thi TOEIC: 1.950.000 VND
            </p>
            }
            {
              (pathName === '/' || pathName === '/luyen-thi-IELTS')
              && <p className="item__text item__text--none-margin">
              Chương trình luyện thi IELTS: 2.950.000 VND
            </p>
            }
            
          </div>
          <div className="item col-sm-6 item--fix-space">
            <div className="item__wrapper__img">
              <img src={bgBook} className="item__img" alt="Ký quỹ" />
            </div>
            <p className="item__title">Sách / Tài liệu có bản quyền</p>
            <p className="item__text">
              Sinh viên sẽ được nhận 1 quyển sách trực tiếp từ NXB để tham gia học tập cùng dự án (không phát sinh chi phí).
            </p>
          </div>
        </div>
        <h1 className="participation__title participation__title--studentship">ĐIỀU KIỆN HỌC BỔNG 50%</h1>
        <div className="participation__row">
          <div className="item col-sm-6 col-md-3">
            <div className="item__wrapper__img">
              <img src={bgClass} className="item__img" alt="Tham gia lớp học" />
            </div>
            <p className="item__title">Tham gia lớp học</p>
            <p className="item__text">Đảm bảo tham gia từ 80% toàn thời gian học của lớp học trở lên.</p>
          </div>
          <div className="item col-sm-6 col-md-3">
            <div className="item__wrapper__img">
              <img src={bgHomework} className="item__img" alt="Bài tập về nhà" />
            </div>
            <p className="item__title">Bài tập về nhà</p>
            <p className="item__text">Làm 100% bài tập về nhà và tỷ lệ "Đạt" từ 70% trở lên.</p>
          </div>
          <div className="item col-sm-6 col-md-3">
            <div className="item__wrapper__img">
              <img src={bgAvatar} className="item__img" alt="Thay Avatar cùng dự án" />
            </div>
            <p className="item__title">Thay Avatar cùng dự án</p>
            <p className="item__text">Học viên đặt Frame Avatar i-Gen trên ảnh đại diện cho facebook của mình trong thời gian học nhằm thể hiện sự quyết tâm hoàn thành chương trình.
            <a href="https://vsn.edu.vn/post/huong-dan-thay-khung-anh-igen-dong-hanh-cung-du-an" className="link-border-avatar" target="_blank" rel="noopener noreferrer"> Xem khung ảnh</a>
            </p>
          </div>
          <div className="item col-sm-6 col-md-3">
            <div className="item__wrapper__img">
              <img src={bgexam} className="item__img" alt="Thi đánh giá cuối kì" />
            </div>
            <p className="item__title">Thi đánh giá cuối kì</p>
            <p className="item__text">Tỉ lệ đúng đối với bài thi cuối khóa từ 50% trở lên.</p>
          </div>
        </div>
        <h1 className="participation__title participation__title--studentship">ĐIỀU KIỆN HỌC BỔNG 100%</h1>
        <div className="participation__row">
          <div className="item col-sm-6 col-md-3">
            <div className="item__wrapper__img">
              <img src={bgClass} className="item__img" alt="Tham gia lớp học" />
            </div>
            <p className="item__title">Tham gia lớp học</p>
            <p className="item__text">Đảm bảo tham gia từ 80% toàn thời gian học của lớp học trở lên.</p>
          </div>
          <div className="item col-sm-6 col-md-3">
            <div className="item__wrapper__img">
              <img src={bgHomework} className="item__img" alt="Bài tập về nhà" />
            </div>
            <p className="item__title">Bài tập về nhà</p>
            <p className="item__text">Làm 100% bài tập về nhà và tỷ lệ "Đạt" từ 70% trở lên.</p>
          </div>
          <div className="item col-sm-6 col-md-3">
            <div className="item__wrapper__img">
              <img src={bgAvatar} className="item__img" alt="Thay Avatar cùng dự án" />
            </div>
            <p className="item__title">Thay Avatar cùng dự án</p>
            <p className="item__text">Học viên đặt Frame Avatar i-Gen trên ảnh đại diện cho facebook của mình trong thời gian học nhằm thể hiện sự quyết tâm hoàn thành chương trình.
              <a href="https://vsn.edu.vn/post/huong-dan-thay-khung-anh-igen-dong-hanh-cung-du-an" className="link-border-avatar" target="_blank" rel="noopener noreferrer"> Xem khung ảnh</a>
            </p>
          </div>
          <div className="item col-sm-6 col-md-3">
            <div className="item__wrapper__img">
              <img src={bgexam} className="item__img" alt="Thi đánh giá cuối kì" />
            </div>
            <p className="item__title">Thi đánh giá cuối kì</p>
            <p className="item__text">Điểm bài thi cuối kì nằm trong top 10% cao nhất của lớp đó.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
}
export default Participation;