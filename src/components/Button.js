import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  getButtonClass = (type) => {
    const baseStyle = 'font-bold px-6 py-2 rounded';
    const buttonTypes = {
      search: 'text-pink bg-teaGreen',
      edit: 'bg-darkPurple text-blue bg-opacity-70',
    };

    return `${baseStyle} ${buttonTypes[type]}`;
  };

  render() {
    const { name, customClass, onButtonClick, isButtonDisabled, testId } = this.props;
    return (
      <button
        type="button"
        className={ this.getButtonClass(customClass) }
        onClick={ onButtonClick }
        disabled={ isButtonDisabled }
        data-testid={ testId }
      >
        {name}
      </button>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  customClass: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  testId: PropTypes.string.isRequired,
  isButtonDisabled: PropTypes.bool.isRequired,
};

export default Button;
