import React, { Component } from 'react';
import bgOne from '../../assets/img/ky-quy.png';
import bgBook from '../../assets/img/book.png';
import bgAvatar from '../../assets/img/avatar-bg.png';
import bgClass from '../../assets/img/bg-class.png';
import bgHomework from '../../assets/img/home-work.png';
import bgexam from '../../assets/img/exam.png';
import './Participation.scss';

class Participation extends Component{
  render() {
  const { backgroundWhite, price1, price2 } = this.props;
  var setBackground = (backgroundWhite) => {
    return backgroundWhite?'background-white':'';
  }
  var extendText1 = (price1) => {
    if(price1) {
      return <span>
        <br/>Số tiền ký quỹ: <strong>{price1} VNĐ.</strong>  
      </span>
    } else return ''
  }
  var extendText2 = (price2) => {
    if(price1) {
      return <span>
         - Sách: <strong>{price2} VNĐ </strong>
                  <br/>(Bao gồm phí vận chuyển & không hoàn lại)  
      </span>
    } else return ''
  }
  return (
    <section className={`participation lazy-load ${setBackground(backgroundWhite)} ${price1?'p-b-0':''} `} id="rules">
      <div className="container">
        <p className="participation__title">Thể lệ tham gia</p>

        <div className="participation__row">
          <div className="item col-sm-6 col-md-4">
            <div className="item__wrapper__img">
              <img src={bgOne} className="item__img" alt="Ký quỹ" />
            </div>
            <p className="item__title">Ký quỹ</p>
            <p className="item__text">
              Phần ký quỹ nhằm thể hiện sự cam kết tham gia chương trình học. Sinh viên được hoàn lại 100% số tiền ký quỹ sau khi đáp ứng Thể lệ tham gia 
              {extendText1(price1)}
             </p>
            <a href="https://qhdn.uel.edu.vn/tin-tuc/thuc-hien-ky-quy-hoc-tap-cung-du-an-i-gen" target="_blank" className="btn btn--outline" rel="noopener noreferrer">Xem thêm <span className="icon icon__arrow"></span></a>
          </div>
          <div className="item col-sm-6 col-md-4">
            <div className="item__wrapper__img">
              <img src={bgBook} className="item__img" alt="Mua sách bản quyền" />
            </div>
            <p className="item__title">Mua sách bản quyền</p>
            <p className="item__text">
                Sinh viên sẽ được nhận sách trực tiếp từ NXB, i-Gen không thu bất kỳ lợi nhuận nào từ việc mua sách bản quyền
                {extendText2(price2)}
            </p>
            <a href="https://qhdn.uel.edu.vn/tin-tuc/tong-hop-bo-giao-trinh-giang-day-do-nxb-pearson-cung-cap" target="_blank" className="btn btn--outline" rel="noopener noreferrer">Xem sách <span className="icon icon__arrow"></span></a>
          </div>
          <div className="item col-sm-6 col-md-4">
            <div className="item__wrapper__img">
              <img src={bgAvatar} className="item__img" alt="Thay Avatar cùng dự án" />
            </div>
            <p className="item__title">Thay Avatar cùng dự án</p>
            <p className="item__text">Học viên tham gia sẽ sử dụng Avatar i-Gen trên trang facebook của mình trong suốt thời gian học nhằm thể hiện sự quyết tâm hoàn thành chương trình</p>
            <a href="https://qhdn.uel.edu.vn/tin-tuc/huong-dan-thay-khung-anh-i-gen-dong-hanh-cung-du-an/" target="_blank" className="btn btn--outline" rel="noopener noreferrer">Xem khung ảnh <span className="icon icon__arrow"></span></a>
          </div>
          <div className="item col-sm-6 col-md-4">
            <div className="item__wrapper__img">
              <img src={bgClass} className="item__img" alt="Tham gia lớp học" />
            </div>
            <p className="item__title">Tham gia lớp học</p>
            <p className="item__text">Đảm bảo tham gia từ 70% thời gian học của toàn khoá trở lên</p>
          </div>
          <div className="item col-sm-6 col-md-4">
            <div className="item__wrapper__img">
              <img src={bgHomework} className="item__img" alt="Bài tập về nhà" />
            </div>
            <p className="item__title">Bài tập về nhà</p>
            <p className="item__text">Hoàn thiện 100% bài tập về nhà với tỉ lệ đúng từ 60% trở lên</p>
          </div>
          <div className="item col-sm-6 col-md-4">
            <div className="item__wrapper__img">
              <img src={bgexam} className="item__img" alt="Thi đánh giá cuối kì" />
            </div>
            <p className="item__title">Thi đánh giá cuối kì</p>
            <p className="item__text">Tham gia bài thi online đánh giá năng lực cuối khoá học với tỉ lệ đúng từ 50% trở lên</p>
          </div>

        </div>

      </div>
    </section>
  )
}
}
export default Participation;