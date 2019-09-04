import React from 'react';
import bgOne from '../../../assets/img/ky-quy.png';
import bgBook from '../../../assets/img/book.png';
import bgClass from '../../../assets/img/bg-class.png';
import bgHomework from '../../../assets/img/home-work.png';
import bgexam from '../../../assets/img/exam.png';
import './styles.scss';

export default function Participation() {
  return (
    <section className="participation-ielts lazy-load" id="rules">
      <div className="container">
        <p className="participation__title">Thể lệ tham gia</p>

        <div className="participation__row">
          <div className="item col-sm-6 col-md-4">
            <div className="item__wrapper__img">
              <img src={bgOne} className="item__img" alt="Ký quỹ" />
            </div>
            <p className="item__title">Ký quỹ</p>
            <p className="item__text">
              Phần ký quỹ nhằm thể hiện sự cam kết tham gia chương trình học. 
              Sinh viên được hoàn lại 100% số tiền ký quỹ sau khi đáp ứng Thể lệ tham gia 
                <br/>Số tiền ký quỹ: <strong>3.000.000 VNĐ.</strong>  
                </p>
            <a href="https://qhdn.uel.edu.vn/tin-tuc/thuc-hien-ky-quy-hoc-tap-cung-du-an-i-gen" target="_blank" className="btn btn--outline" rel="noopener noreferrer">Xem thêm <span className="icon icon__arrow"></span></a>
          </div>
          <div className="item col-sm-6 col-md-4 col-md-offset-3">
            <div className="item__wrapper__img">
              <img src={bgBook} className="item__img" alt="Mua sách bản quyền" />
            </div>
            <p className="item__title">Mua sách bản quyền</p>
            <p className="item__text">
                  Sinh viên sẽ được nhận sách trực tiếp từ NXB, i-Gen không thu bất kỳ lợi nhuận nào từ việc mua sách bản quyền 
                  - Sách: <strong>330.000 VNĐ </strong>
                  <br/>(Bao gồm phí vận chuyển & không hoàn lại)
            </p>
            <a href="https://qhdn.uel.edu.vn/tin-tuc/tong-hop-bo-giao-trinh-giang-day-do-nxb-pearson-cung-cap" target="_blank" className="btn btn--outline" rel="noopener noreferrer">Xem sách <span className="icon icon__arrow"></span></a>
          </div>

          <div className="item col-sm-6 col-md-4">
            <div className="item__wrapper__img">
              <img src={bgClass} className="item__img" alt="Tham gia lớp học" />
            </div>
            <p className="item__title">Tham gia lớp học</p>
            <p className="item__text">Đảm bảo tham gia 70% tổng số buổi học của toàn khoá</p>
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
            <p className="item__text">Tham gia bài thi đánh giá năng lực cuối khoá học với tỉ lệ đúng từ 50% trở lên</p>
          </div>

        </div>

      </div>
    </section>
  )
}