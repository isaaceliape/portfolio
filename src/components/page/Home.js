import React from 'react';
// import PropTypes from 'prop-types';
import './Home.css';

class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      pageName: this.props.pageName,
    };
  }
  render() {
    return(
      <div></div>
    );
  }
}
export default Home;