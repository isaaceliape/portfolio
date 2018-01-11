import React from 'react';
import PropTypes from 'prop-types';

class Marquee extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      posX: window.innerWidth,
      stopAnimation: false,
      color: this.props.color,
      width: 0,
    }
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    this.loop = this.loop.bind(this);
  }
  componentDidMount(){
    this.loop();
  }
  componentWillUnmount(){
    const state = Object.assign({}, this.state);
    state.stopAnimation = true;
    this.setState(state);
  }
  loop(){
    const state = Object.assign({}, this.state);
    if(this.state.width === 0){
      state.width = this.link.clientWidth;
    }
    if(!this.state.stopAnimation){
      const leftLimit = state.width - (state.width * 2);
      if(this.state.posX < leftLimit){
        state.posX = window.innerWidth;
      }else{
        state.posX = state.posX - this.props.speed;
      }
      this.setState(state);
    }
    requestAnimationFrame(this.loop);
  }
  onMouseOver(e){
    const state = Object.assign({}, this.state);
    state.stopAnimation = true;
    state.color = '#fff';
    this.setState(state);

    const mainState = this.props.getMainState();
    mainState.backgroundColor = '#000';
    mainState.bgAnimation = true;
    mainState.cursor.color = '#fff';
    mainState.cursor.visible = true;
    this.props.setMainState(mainState);
  }
  onMouseOut(e){
    const state = Object.assign({}, this.state);
    state.stopAnimation = false;
    state.color = '#000';
    this.setState(state);

    const mainState = this.props.getMainState();
    mainState.backgroundColor = '#fff';
    mainState.bgAnimation = true;
    mainState.cursor.color = '#000';
    mainState.cursor.visible = true;
    this.props.setMainState(mainState);
  }
  render(){
    return(
      <span
        className="Marquee"
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
        ref={(link) => {this.link = link}}
        style={{
          position: 'absolute',
          width: this.props.width,
          left: this.state.posX,
          top: window.innerHeight / 2,
          color: this.state.color,
        }}
      >
        {this.props.children}
      </span>
    );
  }
}
Marquee.propTypes = {
  setMainState: PropTypes.func,
  getMainState: PropTypes.func,
  targetUrl: PropTypes.string,
  width: PropTypes.string,
  speed: PropTypes.number,
  color: PropTypes.string,
};
Marquee.defaultProps = {
  color: '#000',
  speed: 1,
  width: 'auto',
};
export default Marquee;