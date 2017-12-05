import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

class Button extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      hide: false,
    }
  }
  render() {
    return(
      !this.props.hide &&
      <button
        className={`Button ${this.props.className}`}
        onClick={this.props.onClick}
      >
        {this.props.text}
      </button>
    )
  }
}
Button.propTypes = {
  hide: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
};
Button.defaultProps = {
  hide: false,
};
export default Button;