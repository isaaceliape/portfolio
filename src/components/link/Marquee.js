import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import './Marquee.css';

class Marquee extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      posX: window.innerWidth,
      color: this.props.color,
      width: 0,
      isTransiting: true,
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
    let limit = 0;
    if(_.get(this.link, 'clientWidth', 0)){
      limit = (this.link.clientWidth - (this.link.clientWidth * 2));
    }
    if(this.state.isTransiting){
      if(this.state.posX < limit){
        state.posX = window.innerWidth;
      }else{
        state.posX = state.posX - this.props.speed;
      }
      this.setState(state);
    }
    requestAnimationFrame(this.loop);
  }
  onMouseOver(e){
    const backgroundColor = this.props.currentPage === 'about' ? '#000' : '#fff';
    const state = Object.assign({}, this.state);
    state.isTransiting = false;
    state.color = '#fff';
    this.setState(state);

    if(typeof this.props.setProjectBgColor === 'function'){
      this.props.setProjectBgColor('#000');
    }
    const mainState = this.props.getMainState();
    mainState.backgroundColor = backgroundColor;
    mainState.bgAnimation = true;
    mainState.hidePortrait = true;
    mainState.cursor.color = '#fff';
    mainState.cursor.visible = true;
    this.props.setMainState(mainState);
  }
  onMouseOut(e){
    const backgroundColor = this.props.currentPage === 'about' ? '#fff' : '#000';
    const state = Object.assign({}, this.state);
    state.isTransiting = true;
    state.color = '#000';
    this.setState(state);
    if(typeof this.props.setProjectBgColor === 'function'){
      this.props.setProjectBgColor('#fff');
    }
    const mainState = this.props.getMainState();
    mainState.backgroundColor = backgroundColor;
    mainState.bgAnimation = true;
    mainState.hidePortrait = false;
    mainState.cursor.color = '#000';
    mainState.cursor.visible = true;
    this.props.setMainState(mainState);
  }
  render(){
    return(
      <div
        className="Marquee"
      >
        <span
          className="marquee-content"
          ref={(link) => {this.link = link}}
          onMouseOver={this.onMouseOver}
          onMouseOut={this.onMouseOut}
          style={{
            transform: `translateX(${this.state.posX}px)`,
            color: this.state.color,
          }}
        >
          {this.props.children}
        </span>
      </div>
    );
  }
}
Marquee.propTypes = {
  setMainState: PropTypes.func,
  getMainState: PropTypes.func,
  setProjectBgColor: PropTypes.func,
  targetUrl: PropTypes.string,
  width: PropTypes.string,
  speed: PropTypes.number,
  color: PropTypes.string,
  currentPage: PropTypes.string,
};
Marquee.defaultProps = {
  color: '#000',
  speed: 1,
  width: 'auto',
};
export default Marquee;