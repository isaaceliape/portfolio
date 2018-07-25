import React from 'react';
import PropTypes from 'prop-types';

import './Marquee.css';

class Marquee extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onClickAction = this.onClickAction.bind(this);
  }
  componentWillUnmount() {
    const state = Object.assign({}, this.state);
    state.stopAnimation = true;
    this.setState(state);
  }
  onClickAction() {
    window.open(this.props.link);
  }
  render() {
    return (
      <div
        className="Marquee"
        onClick={this.onClickAction}
      >
        <span className="text">
          launch website
        </span>
      </div>
    );
  }
}
Marquee.propTypes = {
  link: PropTypes.string,
};
Marquee.defaultProps = {
  link: null,
};
export default Marquee;
