import React from 'react';
import PropTypes from 'prop-types';
import './Cursor.css';

class Cursor extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      position: {
        x: 0,
        y: 0,
      },
      visible: false,
    }
    this.onMouseMove = this.onMouseMove.bind(this);
  }
  componentDidMount(){
    if(!this.props.isMobile){
      window.addEventListener('mousemove', this.onMouseMove );
    }
  }
  onMouseMove(event){
    this.setState({
      position: {
        x: event.pageX,
        y: event.pageY,
      },
      visible: true,
    });
  }
  render(){
    const visible = this.state.visible ? '1' : '0';
    const rotation = this.props.rotate ? 'rotate(135deg)': 'none';
    return(
      <div
        className='Cursor'
        style={{
          left: this.state.position.x,
          top: this.state.position.y,
          color: this.props.color,
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
  size: PropTypes.string,
  color: PropTypes.string,
  isMobile: PropTypes.bool,
}
Cursor.defaultProps = {
  rotate: false,
}
export default Cursor;