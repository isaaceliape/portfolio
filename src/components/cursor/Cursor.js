import React from 'react';
import PropTypes from 'prop-types';
import { MorphReplace } from 'react-svg-morph';
import './Cursor.css';

class Checked extends React.Component {
  render() {
    return (
      <svg width="24" fill="#00ea00" height="24" viewBox="0 0 24 24">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
      </svg>
    );
  }
}

class CheckBox extends React.Component {
  render() {
    return (
      <svg width="24" height="24" fill="#666666" viewBox="0 0 24 24">
        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
      </svg>
    );
  }
}
class Square extends React.Component {
  render() {
    return (
      <svg width="24" height="24" fill="#666666" viewBox="0 0 24 24">
        <path d="M24,24H0V0H24Z"/>
      </svg>
    );
  }
}
class Circle extends React.Component {
  render() {
    return (
      <svg width="24" height="24" fill="#666666" viewBox="0 0 24 24">
        <path d="M355.09706,50a50,50,0,1,1-50-50A50,50,0,0,1,355.09706,50Z" />
      </svg>
    );
  }
}

class Cursor extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      position: {
        x: 0,
        y: 0,
      },
      object: 'square',
    }
    this.onClick = this.onClick.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
  }
  componentDidMount(){
    window.addEventListener('mousemove', this.onMouseMove );
    // window.addEventListener('click', this.onClick );
  }
  onMouseMove(event){
    this.setState({
      position: {
        x: event.pageX,
        y: event.pageY,
      }
    });
  }
  onClick(event){
    this.setState({
      object: 'circle',
    });
  }
  render(){
    const rotation = this.props.changeCursor ? 'rotate(135deg)' : 'none';
    console.log(`transform: ${rotation};`);
    return(
      <div
        className="Cursor"
        style={{
          left: this.state.position.x,
          top: this.state.position.y,
        }}
      >
        <span
          style={{
            'display': 'block',
            'transition': 'transform .2s ease',
            'transform': rotation,
          }}
        >+</span>
        {/* <MorphReplace width={24} height={24}>
          {this.state.object === 'square' ? <Square /> : <Circle /> }
        </MorphReplace> */}
        {/* <MorphReplace width={100} height={100}>
          {this.state.object === 'square'? <Checked key="checked" /> : <CheckBox key="checkbox" />}
        </MorphReplace> */}
      </div>
    );
  }
}
Cursor.propTypes = {
  changeCursor: PropTypes.bool,
}
Cursor.defaultProps = {
  changeCursor: false,
}
export default Cursor;