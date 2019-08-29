import React from 'react';
import {  Link } from "react-router-dom";
import generalImage from '../../assets/img/program-img-general.png';
import toiecImage from '../../assets/img/program-toiec.svg';
import ieltsImage from '../../assets/img/program-ielts.png';
import './programStudy.scss';

export default function ProgramStudy() {
  return (
    <section className="program lazy-load" id="program">
      <div className="container">
        <p className="program__title">Chương trình học</p>
        <div className="program__row">
          {/* <div className="col-xs-4"> */}
            <div className="program__item">
              <div className="program__item__thumb">
                <img src={generalImage} alt="Tiếng Anh tổng quát" />
              </div>
              <p className="program__item__title program__item__title--general">Tiếng Anh tổng quát</p>
              <p className="program__item__text">Giúp sinh viên rèn luyện 4 kỹ năng NGHE - NÓI - ĐỌC - VIẾT. Sinh viên hoàn toàn tự tin khi sử dụng tiếng Anh trong giao tiếp</p>
              {/* <button className="btn btn--outline">Xem chi tiết <span className="icon icon__arrow"></span></button> */}
              <Link to="/tieng-anh-tong-quat" className="btn btn--outline" rel="noopener noreferrer">Xem chi tiết <span className="icon icon__arrow"></span></Link>
            </div>
          {/* </div> */}
          {/* <div className="col-xs-4"> */}
            <div className="program__item">
              <div className="program__item__thumb">
                <img src={toiecImage} alt="Luyện thi TOEIC" />
              </div>
              <p className="program__item__title program__item__title--toiec">Luyện thi TOEIC</p>
              <p className="program__item__text">Giúp sinh viên đạt các cấp độ TOEIC theo chuẩn đầu ra của trường đại học, xóa bỏ nỗi sợ tiếng Anh cho các bạn sinh viên năm cuối</p>
              <a href="https://igen.vsn.edu.vn/chuong-trinh-học/luyen-thi-toeic" target="_blank" className="btn btn--outline" rel="noopener noreferrer">Xem chi tiết <span className="icon icon__arrow"></span></a>
              {/* <button className="btn btn--outline">Xem chi tiết <span className="icon icon__arrow"></span></button> */}
            </div>
          {/* </div> */}
          {/* <div className="col-xs-4"> */}
            <div className="program__item">
              <div className="program__item__thumb">
                <img src={ieltsImage} alt="Luyện thi IELTS" />
              </div>
              <p className="program__item__title program__item__title--ielts">Luyện thi IELTS</p>
              <p className="program__item__text">Giúp sinh viên đạt cấp độ IELTS từ cơ bản đến nâng cao, nắm vé thông hành trên con đường 
hội nhập quốc tế</p>
                <a href="https://igen.vsn.edu.vn/chuong-trinh-học/luyen-thi-ielts" target="_blank" className="btn btn--outline" rel="noopener noreferrer">Xem chi tiết <span className="icon icon__arrow"></span></a>
            </div>
          {/* </div> */}
        </div>
      </div>
    </section>
  )
}