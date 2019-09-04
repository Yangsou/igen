import React, { Component } from 'react';
import './styles.scss';
class Breadcrumb extends Component {
    render() {
        return (
            <nav className="container">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="https://www.facebook.com/igen.vietnam">Trang Chủ</a></li>
                    <li className="breadcrumb-item"><a href="https://www.facebook.com/igen.vietnam">Chương Trình Học</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Luyện Thi IELTs</li>
                </ol>
            </nav>
        );
    }
}

export default Breadcrumb;