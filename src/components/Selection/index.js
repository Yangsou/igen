import React, { Component, Fragment } from 'react';
import './styles.scss';

class Selection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocusing: false
    }

  }

  formaterText() {
    const { value, placeholder, options } = this.props;
    if (!value) {
      return placeholder;
    }
    const model = options.find((e) => e.value === value);

    return model.name;
  }

  toogle = () => {
    this.setState({
      isFocusing: !this.state.isFocusing
    })
  }

  clickItem = (value) => {
    this.toogle();
    this.props.onChange(value);
  }
  handleClickOutSide = (e) => {
    const el = this.refs['ig-select'],
      target = e.target,
      { isFocusing } = this.state;
    
    if (!el.contains(target) && isFocusing) {
      this.toogle();
    }
    return;
  }

  componentDidMount() {
    window.addEventListener('click', this.handleClickOutSide, false)
  }
  componentWillUnmount() {
    window.removeEventListener('click', this.handleClickOutSide, false)
  }

  render() {
    const { options, value, emptyText, size, disabled } = this.props;
    const { isFocusing } = this.state;

    return (
      <Fragment>
        <div className={`ig-select${disabled ? ' disabled' : ''}`} ref="ig-select">
          <div className={`ig-select__selected ${size} ${isFocusing ? 'ig-select__selected--show' : ''}`} onClick={() => this.toogle()}>{ this.formaterText() }<span className="icon icon__arrow-right ig-select__selected__arrow"></span></div>
          <ul className={`ig-select__menu ${isFocusing ? 'ig-select__menu--show' : ''}`}>

            {
              options.length > 0
                ? options.map((option) => (
                  <li key={option.value} onClick={() => this.clickItem(option.value)} className={`ig-select__item ${value === option.value ? 'ig-select__item--active' : ''}`}>{option.name}</li>
                ))
                : <li className="ig-select__item ig-select__item--empty">{ emptyText }</li>
            }
          </ul>
        </div>
      </Fragment>
    );
  }
}
Selection.defaultProps = {
  size: 'default',
  placeholder: 'Select',
  value: null,
  options: [],
  emptyText: 'No data',
  disabled: false
}
export default Selection;