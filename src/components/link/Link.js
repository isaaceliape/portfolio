import React from 'react';
import PropTypes from 'prop-types';

class Link extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      hovered: false,
      color: '#000',
    }
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
  }
  onMouseOver(e){
    const state = Object.assign({}, this.state);
    state.hovered = true;
    this.setState(state);

    let mainState = this.props.getMainState();
    // mainState.backgroundColor = '#000';
    // mainState.bgAnimation = true;
    // mainState.blackFont = true;
    this.props.setMainState(mainState);
  }
  onMouseOut(e){
    const state = Object.assign({}, this.state);
    state.hovered = false;
    this.setState(state);

    let mainState = this.props.getMainState();
    // mainState.backgroundColor = '#fff';
    // mainState.bgAnimation = true;
    // mainState.blackFont = true;
    this.props.setMainState(mainState);
  }
  render(){
    return(
      <a
        className="Link"
        href={this.props.href}
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
        ref={(link) => {this.link = link}}
        style={{
          color: this.state.color,
        }}
      >
        {this.state.hovered &&
          <span>{this.props.hoverText}</span>
        }
        {!this.state.hovered &&
          <span>{this.props.children}</span>
        }
      </a>
    );
  }
}
Link.propTypes = {
  setMainState: PropTypes.func,
  getMainState: PropTypes.func,
  target: PropTypes.func,
  href: PropTypes.string,
  hoverText: PropTypes.string,
};
Link.defaultProps = {
  hoverText: '',
  showHoverText: false,
};
export default Link;