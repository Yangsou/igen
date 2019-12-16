import React from 'react';
import logo from '../../assets/img/Logo.png';
import './header.scss';
import { Link, withRouter  } from "react-router-dom";
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
          label: 'Đồng hành dự án',
          id: 'partner'
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
  closeMenu = () => {
    this.setState({
      showMenu: false
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
    window.location.href = 'https://igen.vsn.edu.vn/danh-gia-nang-luc'
  }
  clickMenuItem = (id) => {
    if ( id === 'partner') {
      this.props.history.push('/dong-hanh-cung-du-an')
    } else {
      setTimeout(()=> {
        var element = document.getElementById(id);
        if (element) {
        doScrolling(`#${id}`, 500, 70);
        this.setState({
          showMenu: !this.state.showMenu
        })
        }
      },250)
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
    if (window.location.href.split('/').pop() !== "coming-soon") {
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

  }
  showListMenu = (id , label) => {
    if(window.location.href === 'https://igen.edu.vn/'){
      return <p href={`#${id}`}>{ label }</p>
    } else {
      return <Link to='/'>
                <p href={`#${id}`}>{label }</p>
              </Link>
    }
  }
  render() {
    const { menus, showMenu } = this.state;
    return (
      <header ref="header" className="container--fluid header-fixed">
        <div className="header">
          <Link className="header__brand" to="/" onClick={() => this.scrollToTop()}>
            <img src={logo} className="header__brand__img" alt="I-gen logo" />
          </Link>

          <div className="header__right">
            <ul className={`header__menu ${showMenu ? 'active' : ''}`}>
              {
                menus.map((item) => (
                  <li
                    onClick={() => this.clickMenuItem(item.id)}
                    className={`header__menu__item ${item.active ? 'header__menu__item--active': ''}`}
                    key={item.id}>
                      {this.showListMenu(item.id, item.label)}
                  </li>
                ))
              }
              <li className="header__menu__item">
                <Link to="/">
                  <button onClick={() => this.clickMenuItem('process')}  className="btn btn--radius btn--primary btn--uppercase">
                    <span className="icon icon__test"></span>
                    <span className="btn__label">ĐĂNG KÝ HỌC NGAY</span>
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

export default withRouter(Header);