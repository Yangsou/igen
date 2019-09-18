import React, { Component } from 'react';
// import {  Link } from "react-router-dom";
// import img500 from '../../../assets/img/small-icon-toeic-500plus.png';
// import img600 from '../../../assets/img/small-icon-toeic-600plus.png';
// import img900 from '../../../assets/img/small-icon-toeic-900plus.png';
import './styles.scss';
class SuitableClass extends Component {
    render() {
        return (
            <section className="suitable-class-wrap container-fluid">
                <div className="suitable-class container">
                    <br />
                  <p className="register-program__title">Chúng tôi đã có kết quả thi của bạn. <br />Igen sẽ sắp xếp lớp phù hợp và liên hệ với bạn trong thời gian sớm nhất.</p>
                    {/*<div className="suitable-class__list row">*/}
                        {/*<div className="col-xs-12 col-sm-4">*/}
                            {/*<div className="item">*/}
                                {/*<h2 className="item__title item__title--vsn1">Lớp VSN 01</h2>*/}
                                {/*<div className="item__main">*/}
                                    {/*<div className="item__main__space item__main__space--vsn1"></div>*/}
                                    {/*<div className="item__main__content">*/}
                                        {/*<img src={img500} alt=""/>*/}
                                        {/*<div className="item__description">*/}
                                            {/*<div className="item__description__content">*/}
                                                {/*<div className="item__description__left">*/}
                                                    {/*Thời gian:*/}
                                                {/*</div>*/}
                                                {/*<div className="item__description__right">*/}
                                                    {/*Sáng 2,4,6 từ 9h00 - 10h30*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="item__description__content">*/}
                                                {/*<div className="item__description__left">*/}
                                                    {/*Thời gian bắt đầu: */}
                                                {/*</div>*/}
                                                {/*<div className="item__description__right">*/}
                                                    {/*1.9.2019 (dự kiến)*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="item__description__content item__description__content--last">*/}
                                                {/*<div className="item__description__left">*/}
                                                    {/*Số buổi*/}
                                                {/*</div>*/}
                                                {/*<div className="item__description__right">*/}
                                                    {/*24 buổi*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                    {/*<div className="btn-wrap">*/}
                                    {/*<Link to="/luyen-thi-TOEIC" target="_blank" className="btn btn--outline p-l-30 p-r-20 f-14" rel="noopener noreferrer"><span className="btn-text">Đăng ký học</span> <span className="icon icon__arrow"></span></Link>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        {/*<div className="col-xs-12 col-sm-4">*/}
                            {/*<div className="item">*/}
                                {/*<h2 className="item__title item__title--vsn2">Lớp VSN 02</h2>*/}
                                {/*<div className="item__main">*/}
                                    {/*<div className="item__main__space item__main__space--vsn2"></div>*/}
                                    {/*<div className="item__main__content">*/}
                                        {/*<img src={img600} alt=""/>*/}
                                        {/*<div className="item__description">*/}
                                            {/*<div className="item__description__content">*/}
                                                {/*<div className="item__description__left">*/}
                                                    {/*Thời gian:*/}
                                                {/*</div>*/}
                                                {/*<div className="item__description__right">*/}
                                                    {/*Sáng 2,4,6 từ 9h00 - 10h30*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="item__description__content">*/}
                                                {/*<div className="item__description__left">*/}
                                                    {/*Thời gian bắt đầu: */}
                                                {/*</div>*/}
                                                {/*<div className="item__description__right">*/}
                                                    {/*1.9.2019 (dự kiến)*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="item__description__content item__description__content--last">*/}
                                                {/*<div className="item__description__left">*/}
                                                    {/*Số buổi*/}
                                                {/*</div>*/}
                                                {/*<div className="item__description__right">*/}
                                                    {/*24 buổi*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                    {/*<div className="btn-wrap">*/}
                                        {/*<Link to="/luyen-thi-TOEIC" target="_blank" className="btn btn--outline p-l-30 p-r-20 f-14" rel="noopener noreferrer"><span className="btn-text">Đăng ký học</span> <span className="icon icon__arrow"></span></Link>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        {/*<div className="col-xs-12 col-sm-4">*/}
                            {/*<div className="item">*/}
                                {/*<h2 className="item__title item__title--vsn3">Lớp VSN 03</h2>*/}
                                {/*<div className="item__main">*/}
                                    {/*<div className="item__main__space item__main__space--vsn3"></div>*/}
                                    {/*<div className="item__main__content">*/}
                                        {/*<img src={img900} alt=""/>*/}
                                        {/*<div className="item__description">*/}
                                            {/*<div className="item__description__content">*/}
                                                {/*<div className="item__description__left">*/}
                                                    {/*Thời gian:*/}
                                                {/*</div>*/}
                                                {/*<div className="item__description__right">*/}
                                                    {/*Sáng 2,4,6 từ 9h00 - 10h30*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="item__description__content">*/}
                                                {/*<div className="item__description__left">*/}
                                                    {/*Thời gian bắt đầu: */}
                                                {/*</div>*/}
                                                {/*<div className="item__description__right">*/}
                                                    {/*1.9.2019 (dự kiến)*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="item__description__content item__description__content--last">*/}
                                                {/*<div className="item__description__left">*/}
                                                    {/*Số buổi*/}
                                                {/*</div>*/}
                                                {/*<div className="item__description__right">*/}
                                                    {/*24 buổi*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                    {/*<div className="btn-wrap">*/}
                                        {/*<Link to="/luyen-thi-TOEIC" target="_blank" className="btn btn--outline p-l-30 p-r-20 f-14" rel="noopener noreferrer"><span className="btn-text">Đăng ký học</span> <span className="icon icon__arrow"></span></Link>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                </div>
            </section>
        );
    }
}

export default SuitableClass;