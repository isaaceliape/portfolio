import React from 'react';
import PropTypes from 'prop-types';
import {Rect, Circle, Group, RegularPolygon} from 'react-konva';

class Marker extends React.Component {
  constructor(props){
    super(props);
    this.expand = this.expand.bind(this);
    this.count = 0;
  }
  state = {
    color: 'white',
    width: 100,
    height: 100,
  };
  componentDidUpdate(){
    if(this.props.expand){
      console.log('pros', this.props);
      this.expand();
    }
  }
  expand(){
    // this.animation();
    if(this.props.pos.icon === 'circle'){
      this.Circle.to({
        width: window.innerWidth * 2,
        height: window.innerHeight * 2,
        duration: 0.5,
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      });
    }
    if(this.props.pos.icon === 'rect'){
      this.Rect.to({
        width: window.innerWidth,
        height: window.innerHeight,
        duration: 0.5,
        x: 0,
        y: 0,
      });
    }
    if(this.props.pos.icon === 'triangle'){
      this.Poly.to({
        width: window.innerWidth * 4,
        height: window.innerHeight * 4,
        duration: 0.5,
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      });
    }
  }
  render() {
    return (
      <Group>
        {this.props.pos.icon === 'rect' &&
          <Rect
            x={this.props.pos.x - (this.state.width / 2)}
            y={this.props.pos.y - (this.state.height / 2)}
            width={this.state.width}
            height={this.state.height}
            fill={this.state.color}
            ref={(Rect) => { this.Rect = Rect; }}
          />
        }
        {this.props.pos.icon === 'circle' &&
          <Circle
            x={this.props.pos.x}
            y={this.props.pos.y}
            width={this.state.width}
            height={this.state.height}
            radius={50}
            fill={this.state.color}
            ref={(Circle) => { this.Circle = Circle; }}
          />
        }
        {this.props.pos.icon === 'triangle' &&
          <RegularPolygon
            x={this.props.pos.x}
            y={this.props.pos.y}
            width={this.state.width}
            height={this.state.height}
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
  pos: PropTypes.shape({}),
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