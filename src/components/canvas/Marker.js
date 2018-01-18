import React from 'react';
import PropTypes from 'prop-types';
import {Rect, Circle, Group, RegularPolygon} from 'react-konva';

class Marker extends React.Component {
  constructor(props){
    super(props);
    this.expand = this.expand.bind(this);
    this.animationTiming = this.animationTiming.bind(this);
    this.count = 0;
    this.isAnimating = false;
    this.state = {
      color: 'white',
      width: (this.props.getScreenWidth() / 100) * 12,
      height: (this.props.getScreenHeight() / 100) * 12,
      animating: false,
    };
  }
  componentDidUpdate(){
    if(this.props.expand){
      this.expand();
    }
  }
  animationTiming(){
    this.setState({
      animating: false,
    });
  }
  expand(){
    const { getScreenWidth, getScreenHeight } = this.props;
    if(this.isAnimating === false){
      this.isAnimating = true;
      setTimeout(() => {
        this.isAnimating = false;
      }, this.props.animationDuration);
      
      const duration = this.props.animationDuration / 1000;
      if(this.props.pos.icon === 'circle'){
        this.Circle.to({
          width: getScreenWidth() * 3,
          height: getScreenWidth() * 3,
          x: getScreenWidth() / 2,
          y: getScreenWidth() / 2,
          duration,
        });
      }
      if(this.props.pos.icon === 'rect'){
        this.Rect.to({
          width: getScreenWidth() * 2,
          height: getScreenHeight() * 2,
          x: - (getScreenWidth() / 2),
          y: - ((getScreenHeight() / 100) * 50),
          duration,
        });
      }
      if(this.props.pos.icon === 'triangle'){
        this.Poly.to({
          width: getScreenWidth() * 4,
          height: getScreenWidth() * 4,
          x: getScreenWidth() / 2,
          y: getScreenHeight() / 2,
          duration,
        });
      }
    }
  }
  render() {
    return (
      <Group>
        {this.props.pos.icon === 'circle' &&
          <Circle
            x={this.props.pos.x - (this.props.pos.width / 100) * 30}
            y={this.props.pos.y - (this.props.pos.height / 100) * 15}
            radius={(this.props.pos.height / 100) * 40}
            fill={this.state.color}
            ref={(Circle) => { this.Circle = Circle; }}
          />
        }
        {this.props.pos.icon === 'rect' &&
          <Rect
            x={this.props.pos.x - ((this.props.pos.width / 100) * 10)}
            y={this.props.pos.y - ((this.props.pos.height / 100) * 55)}
            width={(this.props.pos.height / 100) * 80}
            height={(this.props.pos.height / 100) * 80}
            fill={this.state.color}
            ref={(Rect) => { this.Rect = Rect; }}
          />
        }
        {this.props.pos.icon === 'triangle' &&
          <RegularPolygon
            x={this.props.pos.x + ((this.props.pos.width / 100) * 30)}
            y={this.props.pos.y}
            width={(this.props.pos.height / 100) * 110}
            height={(this.props.pos.height / 100) * 110}
            sides={3}
            fill={this.state.color}
            ref={(Poly) => { this.Poly = Poly; }}
          />
        }
      </Group>
    );
  }
}
Marker.propTypes = {
  expand: PropTypes.bool,
  isMobile: PropTypes.bool,
  pos: PropTypes.shape({}),
  animationDuration: PropTypes.number,
  getScreenWidth: PropTypes.func,
  getScreenHeight: PropTypes.func,
};
Marker.defaultProps = {
  expand: false,
  pos: {
    x: -200,
    y: -200,
    icon: '',
  }
};
export default Marker;