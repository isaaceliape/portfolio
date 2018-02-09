import React from 'react';
import PropTypes from 'prop-types';

class Portrait extends React.PureComponent {
  render() {
    const hideClass = this.props.hide ? 'hide' : '';
    return(
      <img
        src={this.props.src}
        className={`Portrait ${hideClass}`}
        alt="Profile"
      />
    );
  }
}
Portrait.propTypes = {
  src: PropTypes.string,
  hide: PropTypes.bool,
}
Portrait.defaultProps = {
  hide: false,
}
export default Portrait;