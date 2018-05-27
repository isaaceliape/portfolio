import React from 'react';
import PropTypes from 'prop-types';
import { Rect, Circle, Group, RegularPolygon } from 'react-konva';
import { getScreenWidth, getScreenHeight } from './../../Helpers';

class Marker extends React.Component {
  constructor(props) {
    super(props);
    this.expand = this.expand.bind(this);
    this.count = 0;
    this.isAnimating = false;
    this.state = {
      color: 'white',
    };
  }
  componentDidUpdate() {
    if (this.props.expand) {
      this.expand();
    }
  }
  expand() {
    if (this.isAnimating === false) {
      this.isAnimating = true;
      setTimeout(() => {
        this.isAnimating = false;
      }, this.props.animationDuration);

      const duration = this.props.animationDuration / 1000;
      if (this.props.pos.icon === 'circle') {
        this.CircleRef.to({
          width: getScreenWidth() * 3,
          height: getScreenWidth() * 3,
          x: getScreenWidth() / 2,
          y: getScreenWidth() / 2,
          duration,
        });
      }
      if (this.props.pos.icon === 'rect') {
        this.RectRef.to({
          width: getScreenWidth() * 2,
          height: getScreenHeight() * 2,
          x: -(getScreenWidth() / 2),
          y: -((getScreenHeight() / 100) * 50),
          duration,
        });
      }
      if (this.props.pos.icon === 'triangle') {
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
            x={this.props.pos.x - ((this.props.pos.width / 100) * 30)}
            y={this.props.pos.y - ((this.props.pos.height / 100) * 15)}
            radius={(this.props.pos.height / 100) * 40}
            fill={this.state.color}
            ref={(CircleRef) => { this.CircleRef = CircleRef; }}
          />
        }
        {this.props.pos.icon === 'rect' &&
          <Rect
            x={this.props.pos.x - ((this.props.pos.width / 100) * 10)}
            y={this.props.pos.y - ((this.props.pos.height / 100) * 55)}
            width={(this.props.pos.height / 100) * 80}
            height={(this.props.pos.height / 100) * 80}
            fill={this.state.color}
            ref={(RectRef) => { this.RectRef = RectRef; }}
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
  pos: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    icon: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  animationDuration: PropTypes.number,
};
Marker.defaultProps = {
  animationDuration: null,
  expand: false,
  pos: {
    x: -200,
    y: -200,
    icon: '',
    width: null,
    height: null,
  },
};
export default Marker;
