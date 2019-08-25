import React from 'react';
import bgOnline from '../../assets/img/method-bg-1.png';
import bgPratice from '../../assets/img/method-bg-2.png';
import bgevaluate from '../../assets/img/method-bg-3.png';
import './MethodStudy.scss';

export default function MethodStudy() {
  return (
    <section className="method">
      <div className="container">
        <p className="method__title">Phương pháp học</p>

        <div className="method__row">
          <div className="method__left">
            <p className="method__row__title">Học tập trực tuyến</p>
            <p className="method__row__text">Học mọi lúc, mọi nơi, tiết kiệm thời gian di chuyển, thông qua các nền tảng học tập xu thế như: livestream, video, group trao đổi trực tuyến</p>
            <ul className="method__menu">
              <li><span className="icon icon__check"></span>Tương tác trực tiếp với giảng viên như tại lớp học truyền thống qua các buổi học giảng dạy trên nền tảng livestream tiên tiến do Công ty cổ phần Công nghệ Giáo dục VSN xây dựng</li>
              <li><span className="icon icon__check"></span>Hệ thống các video bài giảng quay lại lớp học, không giới hạn số lần xem, đảm bảo sinh viên vắng mặt có thể theo đúng lộ trình học tập đã đề ra</li>
            </ul>
          </div>
          <div className="method__right">
            <img src={bgOnline} alt="about i-gen" className="method__img" />
          </div>
        </div>
        
        <div className="method__row">
          <div className="method__right">
            <p className="method__row__title">Rèn luyện bài tập</p>
            <p className="method__row__text">Hệ thống bài tập đa dạng cho mỗi chương trình học. Nội dung bài tập được cập nhật từ các giáo trình uy tín</p>
            <ul className="method__menu">
              <li><span className="icon icon__check"></span>Danh mục bài tập về nhà được thể hiện trong từng buổi học. Học viên có thể làm ngay bài tập khi vừa kết thúc buổi học, và luyện tập nhiều lần</li>
              <li><span className="icon icon__check"></span>Kết quả được thể hiện ngay khi vừa nộp bài. Bạn có thể tiếp tục làm lại để cải thiện kết quả, hoặc xem ngay đáp án để bổ sung thêm kiến thức</li>
            </ul>
          </div>
          <div className="method__left">
            <img src={bgPratice} alt="about i-gen" className="method__img" />
          </div>
        </div>

        <div className="method__row">
          <div className="method__left">
            <p className="method__row__title">Đánh giá sự tiến bộ</p>
            <p className="method__row__text">Học viên có thể theo dõi lộ trình học tập, số buổi học đã tham gia, số bài tập đã hoàn thành, điểm số đạt được... để có thể tự đánh giá sự tiến bộ của mình sau khi kết thúc khoá học</p>
            <ul className="method__menu">
              <li><span className="icon icon__check"></span>Hiển thị rõ ràng số buổi học, số bài tập đã làm để đảm bảo học viên có thể xem lại quá trình học tập, cũng như theo dõi điều kiện tham gia để được hoàn ký quỹ</li>
              <li><span className="icon icon__check"></span>Giảng viên và bộ phận chăm sóc học viên của lớp cũng có thể nắm được thông tin này để đánh giá sự tiến bộ của người học qua từng buổi, góp phần sâu sát để hỗ trợ giúp sinh viên đạt được kết quả tốt hơn</li>
            </ul>
          </div>
          <div className="method__right">
            <img src={bgevaluate} alt="about i-gen" className="method__img" />
          </div>
        </div>
        
       </div>
    </section>
  )
}