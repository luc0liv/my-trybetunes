import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { name, customClass } = this.props;
    return (
      <button type="button" className={ customClass }>{ name }</button>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  customClass: PropTypes.string.isRequired,
};

export default Button;
