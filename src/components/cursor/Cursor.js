import React from 'react';
import PropTypes from 'prop-types';
import './Cursor.css';

class Cursor extends React.PureComponent {
  render() {
    // console.log('cursor RENDER');
    // console.log('position', this.props.cursorState);
    // console.log('visible', this.props.cursorState.visible);
    // console.log('rotate', this.props.cursorState.rotate);
    const { x, y } = this.props.cursorState.position;
    const visible = this.props.cursorState.visible ? '1' : '0';
    const rotation = this.props.cursorState.rotate ? 'rotate(135deg)' : 'none';
    return (
      <div
        className="Cursor"
        style={{
          left: `${x}px`,
          top: `${y}px`,
          opacity: visible,
          color: this.props.cursorState.color,
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
  cursorState: PropTypes.shape({
    rotate: PropTypes.bool,
    visible: PropTypes.bool,
    color: PropTypes.string,
    position: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
    }),
  }),
};
Cursor.defaultProps = {
  cursorState: false,
};
export default Cursor;
