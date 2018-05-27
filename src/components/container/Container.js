import React from 'react';
import PropTypes from 'prop-types';

import './Container.css';

class Container extends React.PureComponent {
  render() {
    return (
      <div className="Container">{this.props.children}</div>
    );
  }
}

Container.propTypes = {
  children: PropTypes.node,
};

Container.defaultProps = {
  children: null,
};
export default Container;
