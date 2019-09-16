import React, { Component, Fragment } from 'react';

class FormItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMessage: false,
      isValid: true
    }
  }
  render() {
    const { children, prop } = this.props;
    return (
      <Fragment>
        <div className="form__item" prop={prop}>
          { children }
        </div>
      </Fragment>
    )
  }
}

FormItem.defaultProps = {
  prop: '',
  rules: [],
  isShowMessage: false
}

export default FormItem;