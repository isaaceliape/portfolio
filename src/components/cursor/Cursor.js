import React from 'react';
import PropTypes from 'prop-types';
import './Cursor.css';

class Cursor extends React.PureComponent {
  render(){
    const visible = this.props.visible ? '1' : '0';
    const rotation = this.props.rotate ? 'rotate(135deg)' : 'none';
    return(
      <div
        className='Cursor'
        style={{
          left: `${this.props.posX}px`,
          top: `${this.props.posY}px`,
          opacity: visible,
        }}
      >
        <span
          style={{
            'display': 'block',
            'transform': rotation,
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
  size: PropTypes.string,
  posX: PropTypes.number,
  posY: PropTypes.number,
  color: PropTypes.string,
  isMobile: PropTypes.bool,
  goToDirection: PropTypes.number,
  changeCursorPosition: PropTypes.func,
}
Cursor.defaultProps = {
  rotate: false,
  position: {
    x: 0,
    y: 0,
  },
  posX: window.innerWidth / 2,
  posY: window.innerHeight / 2,
}
export default Cursor;