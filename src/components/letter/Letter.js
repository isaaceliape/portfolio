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
    setTimeout(() => {
      this.setState({
        style: {
          'opacity': 1,
        },
      });
    }, delay);
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
};
Letter.defaultProps = {
  delay: 0,
};
export default Letter;