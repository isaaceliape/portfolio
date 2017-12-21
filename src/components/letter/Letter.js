import React from 'react';
import PropTypes from 'prop-types';
import './Letter.css';

class Letter extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      style: {},
    }
  }
  componentDidMount(){
    const { delay } = this.props;
    if(this.props.animated){
      setTimeout(() => {
        this.setState({
          style: {
            'transform': 'translateX(0)',
          },
        });
      }, delay);
    } else {
      this.setState({
        style: {
          'transform': 'translateX(0)',
          'transition': 'none',
        },
      });
    }
  }
  render(){
    const { text } = this.props;
    return(
      <div className="Letter">
        <span style={this.state.style}>{text}</span>
      </div>
    );
  }
}
Letter.propTypes = {
  text: PropTypes.string,
  delay: PropTypes.number,
  animated: PropTypes.bool,
};
Letter.defaultProps = {
  delay: 0,
  animated: true,
};
export default Letter;