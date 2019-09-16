import AsyncValidator from 'async-validator';
import React, { Component, Fragment } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

class FormItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: '',
      valid: false,
      validating: false
    }
  }
  getChildContext = () => {
    return {
      form: this
    };
  }

  getFilteredRule = (trigger) => {
    const rules = this.getRules();

    return rules.filter(rule => {
      if (!rule.trigger || trigger === '') return true;
      if (Array.isArray(rule.trigger)) {
        return rule.trigger.indexOf(trigger) > -1;
      } else {
        return rule.trigger === trigger;
      }
    }).map(rule => Object.assign({}, rule));
  }
  validate = (trigger, cb = () => {}) => {
    const rules = this.getFilteredRule(trigger);

    if (!rules || rules.length === 0) {
      if (cb instanceof Function) {
        cb();
      }

      return true;
    }

    this.setState({ validating: true });

    const descriptor = { [this.props.prop]: rules };
    const validator = new AsyncValidator(descriptor);
    const model = { [this.props.prop]: this.fieldValue() };

    validator.validate(model, { firstFields: true }, errors => {
      this.setState({
        error: errors ? errors[0].message : '',
        validating: false,
        valid: !errors
      }, () => {
        if (cb instanceof Function) {
          cb(errors);
        }
      });
    });
  }

  getInitialValue = () => {
    const value = this.parent().props.model[this.props.prop];

    if (value === undefined) {
      return value;
    } else {
      return JSON.parse(JSON.stringify(value));
    }
  }

  
  componentDidMount() {
    const { prop } = this.props;

    if (prop) {
      this.parent().addField(this);

      this.initialValue = this.getInitialValue();
    }
  }
  componentWillUnmount() {
    this.parent().removeField(this);
  }
  parent = () => {
    return this.context.component;
  }
  isRequired = () => {
    const rules = this.getRules();
    const isRequired = false;

    if (rules && rules.length) {
      rules.every(rule => {
        if (rule.required) {
          // isRequired = true;

          return false;
        }
        return true;
      });
    }

    return isRequired;
  }
  getRules = () => {
    let formRules = this.parent().props.rules;
    const selfRuels = this.props.rules;

    formRules = formRules ? formRules[this.props.prop] : [];
    return [].concat(selfRuels || formRules || []);
  }
  isRequired = () => {
    const rules = this.getRules();
    const isRequired = false;

    if (rules && rules.length) {
      rules.every(rule => {
        if (rule.required) {
          // isRequired = true;

          return false;
        }
        return true;
      });
    }

    return isRequired;
  }
  fieldValue = () => {
    const model = this.parent().props.model;
    if (!model || !this.props.prop) { return; }
    const temp = this.props.prop.split(':');
    return temp.length > 1 ? model[temp[0]][temp[1]] : model[this.props.prop];
  }
  onFieldChange = () => {
    if (this.validateDisabled) {
      this.validateDisabled = false;

      return;
    }
    
    setTimeout(() => {
      this.validate('change');
      
    });
  }


  render() {
    const { children, prop, required, className } = this.props;
    const { error, validating } = this.state;
    return (
      <Fragment>
        <div className={`${className} form-item${error !== '' ? ' is-error' : ''}${validating ? ' is-validating' : ''}${this.isRequired() || required ? ' is-required' : ''}`}
          prop={prop} onChange={this.onFieldChange.bind(this)}>
          { children }
          {
            error !== '' && <label className="form-item__label-error">{ error }</label>
          }
        </div>
      </Fragment>
    )
  }
}

FormItem.contextTypes = {
  component: PropTypes.any
};

FormItem.childContextTypes = {
  form: PropTypes.any
};
FormItem.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  labelWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  prop: PropTypes.string,
  required: PropTypes.bool,
  rules: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default FormItem;