import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

class Button extends React.PureComponent {
  render() {
    return (
      !this.props.hide &&
        <button
          className={`Button ${this.props.className}`}
          onClick={this.props.onClick}
          onMouseOver={this.props.onMouseOver}
          onFocus={this.props.onMouseOver}
          onMouseOut={this.props.onMouseOut}
          onBlur={this.props.onMouseOut}
        >
          {this.props.text}
        </button>
    );
  }
}
Button.propTypes = {
  hide: PropTypes.bool,
  text: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  onMouseOver: PropTypes.func,
  onMouseOut: PropTypes.func,
};
Button.defaultProps = {
  text: null,
  hide: false,
  onClick: null,
  className: null,
  onMouseOver: null,
  onMouseOut: null,
};
export default Button;
