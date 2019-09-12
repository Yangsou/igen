import React from 'react';
import logo from '../../assets/img/Logo.png';
import './header.scss';
import { Link } from "react-router-dom";
import { doScrolling } from '../../helpers/functional';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      menus: [
        {
          label: 'Trang chủ',
          id: 'home',
          active: true
        },
        {
          label: 'Về chúng tôi',
          id: 'about-us'
        },
        {
          label: 'Chương trình học',
          id: 'program'
        },
        {
          label: 'Phương pháp học',
          id: 'method'
        },
        {
          label: 'Thể lệ tham gia',
          id: 'rules'
        },
        {
          label: 'Liên hệ',
          id: 'contact-us'
        }
      ]
    }
  }

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  activeHeaderWhenScroll = () => {
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    var header = this.refs.header;;
    if(scrollTop > 50){
      header.classList.add('active');
    }else{
      header.classList.remove('active');
    }
  }

  clickPrimaryButton = () => {
    window.location.href = 'https://igen.vsn.edu.vn/dang-ky-thi-thu'
  }

  clickMenuItem = (id) => {
    var element = document.getElementById(id);

    if (element) {
      doScrolling(`#${id}`, 500, 70);
      this.setState({
        showMenu: !this.state.showMenu
      })
    }
  }

  componentDidMount() {
    this.activeHeaderWhenScroll();
    window.addEventListener('scroll', this.activeHeaderWhenScroll, false);
    window.addEventListener('scroll', this.toggleMenuItemActive, false);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.activeHeaderWhenScroll, false);
  }
  scrollToTop = () => {
    window.scroll(0, 0);
  }
  toggleMenuItemActive = () => {
    const menus = this.state.menus.map((e) => {
      const element = document.getElementById(e.id),
        rectTop = element ? element.getBoundingClientRect().top : null,
        rectBottom = element ? element.getBoundingClientRect().bottom : null;

      return {
        ...e,
        active: (rectTop <= 90 && rectBottom > 90) || (e.id === 'contact-us' && window.innerHeight - rectBottom > 0)
      }
    });
    this.setState({
      menus
    })
  }
  render() {
    const { menus, showMenu } = this.state;
    return (
      <header ref="header" className="container--fluid header-fixed">
        <div className="header">
          <a className="header__brand" href="/">
            <img src={logo} className="header__brand__img" alt="I-gen logo" />
          </a>

          <div className="header__right">
            <ul className={`header__menu ${showMenu ? 'active' : ''}`}>
              {
                menus.map((item) => (
                  <li
                    onClick={() => this.clickMenuItem(item.id)}
                    className={`header__menu__item ${item.active ? 'header__menu__item--active': ''}`}
                    key={item.id}>
                    <p href={`#${item.id}`}>{ item.label }</p>
                  </li>
                ))
              }
              <li className="header__menu__item">
                <Link to="/dang-ky-thi-thu" onClick={this.toggleMenu}>
                  <button onClick={() => this.scrollToTop()}  className="btn btn--radius btn--primary btn--uppercase">
                    <span className="icon icon__test"></span>
                    <span className="btn__label">Đăng ký thi thử</span>
                  </button>
                </Link>
              </li>
            </ul>

            <button className={`header__btn-toggle ${showMenu ? 'active' : ''}`} onClick={this.toggleMenu}>
              <span className="line line--first"></span>
              <span className="line line--second"></span>
              <span className="line line--third"></span>
            </button>
          </div>

        </div>
      </header>
    )
  }
}

export default Header;