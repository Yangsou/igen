import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './styles.scss';
class Breadcrumb extends Component {
    render() {
        return (
            <nav className="container">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Trang Chủ</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Đăng Ký Thi Thử</li>
                </ol>
            </nav>
        );
    }
}

export default Breadcrumb;