import React from 'react';
import PropTypes from 'prop-types';
import './Cursor.css';

class Cursor extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
    };
    this.onMouseMove = this.onMouseMove.bind(this);
  }

  componentDidMount() {
    if (!this.props.isMobile) {
      window.addEventListener('mousemove', this.onMouseMove);
    }
  }

  onMouseMove(event) {
    const state = Object.assign({}, this.state);
    state.x = event.pageX;
    state.y = event.pageY;
    this.setState(state);
  }

  render() {
    const visible = this.props.visible ? '1' : '0';
    const rotation = this.props.rotate ? 'rotate(135deg)' : 'none';
    return (
      <div
        className="Cursor"
        style={{
          left: `${this.state.x}px`,
          top: `${this.state.y}px`,
          opacity: visible,
          color: this.props.color,
        }}
      >
        <span
          style={{
            display: 'block',
            transform: rotation,
          }}
        >
          +
        </span>
      </div>
    );
  }
}
Cursor.propTypes = {
  rotate: PropTypes.bool,
  visible: PropTypes.bool,
  color: PropTypes.string,
  isMobile: PropTypes.bool,
};
Cursor.defaultProps = {
  rotate: false,
  visible: null,
  color: null,
  isMobile: null,
};
export default Cursor;
