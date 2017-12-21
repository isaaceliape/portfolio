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
    window.addEventListener('mousemove', this.onMouseMove );
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
    const rotation = this.props.rotate ? 'rotate(135deg)' : 'none';
    const triangle = this.props.currentCursor === '▲' ? 'triangle' : '';
    const visible = this.state.visible ? '1' : '0';
    return(
      <div
        className={`Cursor ${this.props.size} ${triangle}`}
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
          {this.props.currentCursor}
        </span>
      </div>
    );
  }
}
Cursor.propTypes = {
  rotate: PropTypes.bool,
  currentCursor: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
}
Cursor.defaultProps = {
  rotate: false,
}
export default Cursor;