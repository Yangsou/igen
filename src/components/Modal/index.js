import React, { Component } from 'react';
import imgA1 from '../../assets/img/description-A1.png'
import imgA2 from '../../assets/img/description-A2.png'
import imgB1 from '../../assets/img/description-B1.png'
import imgB2 from '../../assets/img/description-B2.png'
import imgC1 from '../../assets/img/description-C1.png'
import imgC2 from '../../assets/img/description-C2.png'
import imgToiec from '../../assets/img/description-toiec.png'
import imgIeltsBasic from '../../assets/img/description-ielts.png'
import imgIeltsInter from '../../assets/img/description-ielts-inter.png'
import imgIeltsFoundation from '../../assets/img/description-ielts-foundation.png'
import './styles.scss'
class Modal extends Component {
    constructor(props) {
        super(props);
    
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
      }
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
      }
    
      componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
      }
      onHideModal = () => {
        this.props.hideModal();
    }
      setWrapperRef(node) {
        this.wrapperRef = node;
      }
      handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.props.hideModal();
        }
      }
    render() {
        var { show, type } = this.props;
        var imgList = [imgA1, imgA2, imgB1, imgB2, imgC1, imgC2, imgIeltsFoundation, imgIeltsBasic, imgIeltsInter,  imgToiec];
        const showHideWrapBox = show ? "modal display-blok":"modal display-none";
        const showHideClassName = show ? "modal-main show" : "modal-main hide";
        return (
            <section className={showHideWrapBox}  >
                <div className={`${showHideClassName} scrollbar style-scroll`} ref={this.setWrapperRef}>
                    <div className="modal-main-wrap-img">  
                        <img src={imgList[type]} alt="Mô tả khóa học" />
                        <div className="modal-wrap-btn">
                            <button className="modal-close" onClick={()=> this.onHideModal()} >Close</button>
                        </div>
                    </div>   
                </div>
            </section>
        );
    }
}

export default Modal;