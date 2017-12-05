import React from 'react';
import './Container.css';

class Container extends React.PureComponent {
  render() {
    return(
      <div className="Container">{this.props.children}</div>
    )
  }
}
export default Container;