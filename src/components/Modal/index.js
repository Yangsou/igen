import React, { Component } from 'react';
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
        var { show, img } = this.props;
        const showHideWrapBox = show ? "modal display-blok":"modal display-none";
        const showHideClassName = show ? "modal-main show" : "modal-main hide";
        return (
            <section className={showHideWrapBox}  >
                <div className={`${showHideClassName} scrollbar style-scroll`} ref={this.setWrapperRef}>
                    <div className="modal-main-wrap-img">  
                        <img src={img} alt="Mô tả khóa học" />
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