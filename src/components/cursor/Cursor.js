import React from 'react';
import PropTypes from 'prop-types';
import './Cursor.css';

class Cursor extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      x: 0,
      y: 0,
    }
    this.onMouseMove = this.onMouseMove.bind(this);
  }

  componentDidMount(){
    if(!this.props.isMobile){
      window.addEventListener('mousemove', this.onMouseMove );
    }
  }

  onMouseMove(event){
    let state = Object.assign({}, this.state);
    state.x = event.pageX;
    state.y = event.pageY;
    this.setState(state);
  }

  render(){
    const visible = this.props.visible ? '1' : '0';
    const rotation = this.props.rotate ? 'rotate(135deg)' : 'none';
    return(
      <div
        className='Cursor'
        style={{
          left: `${this.state.x}px`,
          top: `${this.state.y}px`,
          opacity: visible,
          color: this.props.color,
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
  color: PropTypes.string,
  isMobile: PropTypes.bool,
  goToDirection: PropTypes.number,
}
Cursor.defaultProps = {
  rotate: false,
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
}
export default Cursor;