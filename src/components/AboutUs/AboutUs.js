import React from 'react';
import './about.scss';
import image from '../../assets/img/about-us-img.png';

class AboutUs extends React.Component {
	render() {
		return (
			<section className="container" id="about-us">
				<div className="about-us lazy-load">
					<div className="about-us__left col-xs-12 col-md-6">
						<p className="about-us__title">i-Gen LÀ GÌ ?</p>
						<ul className="about-us__menu">
							<li>
								<span className="icon icon__check"></span> i-Gen (Intelligent Generation), Một triệu
								sinh viên Việt Nam tự tin với Tiếng Anh là dự án cộng đồng phi lợi nhuận dành cho sinh
								viên Việt Nam.{' '}
							</li>
							<li>
								<span className="icon icon__check"></span> i-Gen ra đời nhằm mục đích xóa bỏ rào cản
								ngôn ngữ, giúp sinh viên có thể tự tin sử dụng tiếng Anh trong học tập và nghề nghiệp
								tương lai.
							</li>
							<li>
								<span className="icon icon__check"></span>Nhờ sự tài trợ, hợp tác từ các đối tác, iGen
								có quỹ học bổng dành cho toàn bộ các bạn học viên chăm chỉ, nhằm tạo thêm động lực và hỗ
								trợ các bạn trong quá trình cải thiện tiếng Anh của mình
							</li>
						</ul>
					</div>
					<div className="about-us__right col-xs-12 col-md-6">
						<img src={image} alt="about i-gen" className="about-us__img" />
					</div>
				</div>
			</section>
		);
	}
}

export default AboutUs;
