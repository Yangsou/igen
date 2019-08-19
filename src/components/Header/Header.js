import React from 'react';
import logo from '../../assets/img/Logo.png';
import './header.scss';

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

  render() {
    const { menus, showMenu } = this.state;
    return (
      <header className="container--fluid">
        <div className="container header">
          <a className="header__brand" href="/">
            <img src={logo} className="header__brand__img" alt="I-gen logo" />
          </a>

          <div className="header__right">
            <ul className={`header__menu ${showMenu ? 'active' : ''}`}>
              {
                menus.map((item) => (
                  <li className={`header__menu__item ${item.active ? 'header__menu__item--active': ''}`} key={item.id}>
                    <a href={`#${item.id}`}>{ item.label }</a>
                  </li>
                ))
              }
              <li className="header__menu__item">
                <button className="btn btn--radius btn--primary btn--uppercase">
                  <span className="icon icon__test"></span>
                  <span className="btn__label">Đăng ký thi thử</span>
                </button>
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