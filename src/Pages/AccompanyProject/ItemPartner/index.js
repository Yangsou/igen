import React, { Component } from 'react'
import './styles.scss'
import image1 from '../../../assets/img/HinhGV/NguyenTienDung.png';
// import image2 from '../../../assets/img/HinhGV/HoangCongGiaKhanh.png';
import image3 from '../../../assets/img/HinhGV/NguyenBichNgoan.png';
import image4 from '../../../assets/img/HinhGV/NguyenThiCanh.png';
import image5 from '../../../assets/img/HinhGV/NguyenTuongChau.png';
import image6 from '../../../assets/img/HinhGV/HoTrungThanh.png';
import image7 from '../../../assets/img/HinhGV/LoiMinhThanh.png';
// import image8 from '../../../assets/img/HinhGV/NguyenThanhTrong.png';

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrImage: [image1, image3, image4, image5, image6, image7],
            partnerItem : [
                {
                    name : 'PGS. TS Nguyễn Tiến Dũng',
                    position: ['Hiệu trưởng Trường Đại học Kinh tế - Luật'],
                    description: 'Bằng cách áp dụng công nghệ tiên tiến vào việc dạy học, iGen đã giúp việc học tiếng anh tại trường trở nên thuận tiện hơn, tiết kiệm chi phí nhưng hiệu quả vẫn được đảm bảo.'
                },
                // {
                //     name : 'PSG. TS Hoàng Công Gia Khánh',
                //     position: ['Phó hiệu trưởng Trường Đại học Kinh tế - Luật'],
                //     description: 'Ngoài các ưu điểm của việc học trực tuyến, iGen đã mang lại cơ hội học tập tiếng Anh cho tất cả các bạn sinh viên trên toàn quốc, một dự án vì cộng đồng phi lợi nhuận vô cùng thiết thực.'
                // },
                {
                    name : 'TS. Nguyễn Thị Bích Ngoan',
                    position: ['Trưởng bộ môn Ngoại Ngữ','Trường Đại học Kinh tế - Luật'],
                    description: 'Học tiếng Anh ngay tại nhà mà vẫn tương tác trực tiếp được với giáo viên khắp trên khắp thế giới là điều thú vị. Tôi thực sự hào hứng với dự án này, vô cùng tiện lợi và tiết kiệm thời gian di chuyển.'
                },
                {
                    name : 'GS.TS Nguyễn Thị Cành',
                    position: [''],
                    description: 'Với những gì mà iGen đang thể hiện, tôi tin rằng dự án sẽ còn phát triển và vươn xa hơn nữa để hoàn thành sứ mệnh giúp cho hàng triệu sinh viên Việt Nam tự tin với tiếng Anh!'
                },
                {
                    name : 'ThS. Nguyễn Tường Châu',
                    position: ['Giám Đốc trung tâm Ngoại Ngữ - Tin học ','Trường Đại học Kinh tế - Luật'],
                    description: 'Dù là sinh viên năm nhất, hay sinh viên năm cuối, các bạn sinh viên nên tận dụng thời gian để cải thiện trình độ tiếng Anh của mình. Với iGen - một dự án rất thú vị và tiềm năng, tôi nghĩ việc đó không còn là khó khăn nữa!'
                },
                {
                    name : 'TS. Hồ Trung Thành',
                    position: ['Trưởng khoa Hệ Thống Thông Tin Quản lý','Trường ĐH Kinh Tế - Luật'],
                    description: 'Thế hệ Z đầy tiềm năng cần một phương pháp học hiện đại mà vẫn giữ lại được sự tương tác truyền thống giữa giáo viên và học viên, iGen đã và đang làm rất tốt ở khía cạnh này để giúp cho thế hệ sinh viên Việt Nam tự tin nói tiếng Anh.'
                },
                {
                    name : 'Th.S Lợi Minh Thanh',
                    position: ['Phó Giám Đốc Trung tâm Quan hệ doanh nghiệp', 'Trường Đại học Kinh tế - Luật'],
                    description: 'Các doanh nghiệp liên kết cùng nhà trường đánh giá rất cao về iGen, về tính cộng đồng cũng như giải pháp học tập theo xu hướng trực tuyến hiện nay. Một số doanh nghiệp đã cam kết đồng hành cùng dự án trong những năm sau nữa.'
                },
                // {
                //     name : 'TS. Nguyễn Thanh Trọng',
                //     position: ['Trưởng phòng Đào tạo','Trường Đại học Kinh tế - Luật'],
                //     description: 'Cùng với các hoạt động học Tiếng Anh chính quy, tôi tin iGen sẽ góp phần nâng cao hiệu quả đầu ra cho sinh viên của trường, cũng như khả năng sử dụng Tiếng Anh trong công việc sau này.'
                // }
            ]
        }
    }
    renderPosition = (position) => {
        return (
            <div>
                {
                    position.map((pos, index) => {
                        return (
                        <div key={index}>{pos}</div>
                        )
                    })
                }
            </div>
        )
    }
    render() {
        const { partnerItem }= this.state
        return (
            <section className="list-partner-project">
                <div className="container-fluid">
                    <div className="container">
                        <div className="row pt-80">
                            { 
                                partnerItem.map((item, index) => {
                                    return (
                                        <div key={index} className="col-sm-6">
                                            <div className="card-level">
                                                <div className="card-box">
                                                    <img className="card-level-img" src={this.state.arrImage[index]} alt="" />
                                                    <h1 className="card-level-title">{item.name}</h1>
                                                    <div className="sub-card-level-title">
                                                        {
                                                            this.renderPosition(item.position)
                                                            // item.position[0]
                                                        }
                                                    </div>
                                                    <div className="card-level-description">
                                                        <div className="wrap-quotes-bold" ><strong className="quotes-start" ><i>"</i></strong></div>
                                                        <div className="description-content">
                                                            {item.description}
                                                            <div className="wrap-qoute-end"><strong className="quotes-end"><i>"</i></strong> </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
